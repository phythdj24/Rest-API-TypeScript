import express from "express";
import { deleteUserbyId, getUserbyId, getUsers } from "./userController";



export const getAllusers = async(req:express.Request, res:express.Response)=>{
   try {
    const user = await getUsers()

    return res.status(200).json(user)
   } catch (error) {
      console.log(error);
      return res.sendStatus(400);
   } 
}

export const deleteuser = async(req:express.Request, res:express.Response)=>{
    try {
        const {id} = req.params;

        const deletedUser = await deleteUserbyId(id)
        return res.json(deleteUserbyId)
    } catch (error) {
        console.log(error);
      return res.sendStatus(400);
    }
}


export const updateUser =async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
    try {
        const {username} =req.body;
        const {id} = req.params;

        if (!username) {
            return res.sendStatus(400)

        }

        const user = await getUserbyId(id)
        await user.save()

        return res.status(200).json(user).end()
    } catch (error) {
        console.log(error);
      return res.sendStatus(400);
    }
}