import express from "express";
import * as AuthController from "../controllers/auth.controller";
import passport from "passport";

const route = express.Router();

route.post("/sign-up", AuthController.signup);
route.post("/sign-in", AuthController.signin);

// authRoutes.get('/google',  passport.authenticate('google', { scope: ['profile', 'email'] }))
// authRoutes.get('/google/redirect', passport.authenticate('google'), AuthController.googleAuth);
route.post("/change_password", AuthController.changePassword);

export default route;
