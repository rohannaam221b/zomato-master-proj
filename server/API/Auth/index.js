// Library

import express from 'express';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models

import { UserModel } from '../../database/user';

const Router = express.Router();


/*
Route  /signup
Des    Signup with emails and password  
Params none
Access  public 
Method  POST

*/

Router.post("/signup", async (req, res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.credentials;

        //checks whether email exist 
        const checkUser = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if (checkUser || checkUserByPhone) {
            return res.json({ error: "User already exists" });
        }

        //hash password salt is that how many time your password is gonna encrypted 

        const bcryptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        // save to DB
        await UserModel.create({ ...req.body.credentials, password: hashedPassword });
        return res.status(200).json({ token, status: 'success' });

        // generate JWT auth token 


        const token = jwt.sign({ user: { fullname, email } }, "ZomatoAPP");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;