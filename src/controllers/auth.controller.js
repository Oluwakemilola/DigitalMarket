import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { CustomResponse } from "../utils/customResponse.js";
import Joi from 'joi';

const signupSchema = Joi.object({
    fullname: Joi.string().min(3).required(),
    email: Joi.string.email().required(),
    phone: Joi.string().optional(),
    password: Joi.string().min(6).required(),
  role: Joi.string().valid("admin", "farmer", "buyer", "logistics").required(),
});

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

