import express from "express";
import * as AuthController from "../controllers/auth.controller";
import passport from "passport";

export const authRoutes = express.Router();

authRoutes.post("/sign-up", AuthController.signup);
authRoutes.post("/sign-in", AuthController.signin);

// authRoutes.get('/google',  passport.authenticate('google', { scope: ['profile', 'email'] }))
// authRoutes.get('/google/redirect', passport.authenticate('google'), AuthController.googleAuth);
authRoutes.post("/change_password", AuthController.changePassword);
