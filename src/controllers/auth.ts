import express from "express";
import { createUser, getuserByEmail } from "./userController";
import { authentication, random } from "../helpers";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const userExist = await getuserByEmail(email);

    if (userExist) {
      return res.sendStatus(400).json({
        msg: "User Alredy Exist",
      });
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.sendStatus(400).json({
          msg: "Email and Password is Mandatory",
        });
      }
  
      const user = await getuserByEmail(email).select(
        "+authentication.salt +authentication.password"
      );
      console.log("User:", user); // Log user object for debugging
      if (!user) {
        return res.status(400).json({
          msg: "User Not Exist",
        });
      }
  
      const expectedHash = authentication(user.authentication.salt, password);
      console.log("Expected Hash:", expectedHash); // Log expected hash for debugging
      console.log("User Password Hash:", user.authentication.password); // Log user password hash for debugging
      if (user.authentication.password !== expectedHash) {
        return res.status(400).json({
          msg: "Incorrect Password",
        });
      }
  
      // Use the same salt for session token as used for password hashing
      const salt = user.authentication.salt;
      user.authentication.sessionToken = authentication(
        salt,
        user._id.toString()
      );
      await user.save();
  
      res.cookie("SANGAM_AUTH", user.authentication.sessionToken, {
        domain: "localhost",
        path: "/",
      });
  
      return res.status(200).json({
        msg: "User Logged Successfully",
        user,
      });
  
    } catch (error) {
      console.log("Error:", error); // Log any errors for debugging
      return res.sendStatus(404);
    }
  };
  