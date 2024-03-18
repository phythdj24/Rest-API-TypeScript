import express from 'express'
import { createUser, getuserByEmail } from './userController';
import { authentication, ranodm } from '../helpers';

export const register = async(req:express.Request,res:express.Response)=>{
    try {
        const {email,password,username}= req.body

        if (!email || !password ||!username) {
            return res.sendStatus(400);
        }

        const userExist = await getuserByEmail(email)

        if (userExist) {
              return res.sendStatus(400).json({
                msg:"User Alredy Exist"
            })
        }

        const salt= ranodm();
        const user = await createUser({
            email,
            username,
            authentication:{
                salt,
                password: authentication(salt,password)
            }
        })
        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);

        
    }
}