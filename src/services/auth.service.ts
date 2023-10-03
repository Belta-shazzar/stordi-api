import _ from "lodash";
import * as UserRepo from "../database/repository/user.repo";
import { createCategory } from "../database/repository/category.repo";
import bcrypt from "bcryptjs";
import { Flag } from "../util";
import { generateToken } from "../config/jwt";

export const signUp = async (signupReq: Record<string, any>) => {
  const { fullname, email, password } = signupReq;

  if (!fullname || !email || !password) {
    return { success: false, message: "invalid or missing inputs", data: {} };
  }

  const checkUser = await UserRepo.getUserByEmail(email);

  if (checkUser) {
    return { success: false, message: "email already exist", data: {} };
  }

  const [firstname, lastname] = fullname.split(" ");

  if (!firstname || !lastname)
    return { success: false, message: "please enter full name", data: {} };

  const user = await UserRepo.create({
    firstname,
    lastname,
    email,
    password,
  });

  await createCategory({ name: 'general', userId: user._id });

  const token = await generateToken(user._id.toString(), Flag.AUTH);

  return {
    success: true,
    message: "",
    data: { user: _.omit(user.toJSON(), ["password", "__v"]), token },
  };
};

export const signin = async (signinReq: Record<string, string>) => {
  const { email, password } = signinReq;

  if (!email || !password) {
    return { success: false, message: "invalid or missing inputs", data: {} };
  }

  const user = await UserRepo.getUserByEmail(email);

  if (!user) {
    return { success: false, message: "email does not exist", data: {} };
  }

  const checkPassword = await bcrypt.compare(password, user.password!);

  if (!checkPassword) {
    return { success: false, message: "incorrect password", data: {} };
  }

  const token = await generateToken(user._id.toString(), Flag.AUTH);

  return {
    success: true,
    message: "",
    data: { user: _.omit(user.toJSON(), ["password", "__v"]), token },
  };
};

export const googleAuth = async (profile: Record<string, any>) => {
  const checkUser = UserRepo.getByGoogleID(profile.id);

  if (!checkUser) {
    const user = await UserRepo.create({
      firstname: profile.name.givenName,
      lastname: profile.name.familyName,
      email: profile._json.email,
      googleId: profile.id,
      emailVerifiedAt: new Date(),
    });

    return user;
  }

  return checkUser;
};
