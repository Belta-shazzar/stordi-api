import { Response, Request } from "express";
import * as AuthService from "../services/auth.service";

export const signup = async (req: Request, res: Response) => {
  try {
    const { success, message, data } = await AuthService.signUp({ ...req.body });
    return res.status(200).json({ success, message, data });
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { success, message, data } = await AuthService.signin({ ...req.body });
    return res.status(200).json({ success, message, data });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ success: true, message: "Success", data: [] });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

export const googleAuth = async (req: Request, res: Response) => {
  try {
    console.log("Na here i dey: ", req.user);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: "could not resolve request" });
  } 
}
