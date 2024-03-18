import { getUserBysessionToken } from 'controllers/userController'
import express from 'express'
import {get,merge} from 'lodash'



export const isOwner = async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
    try {
        const {id} = req.params;
        const currentUserid = get(req,'identity._id') as String;

        if(!currentUserid){
            return res.sendStatus(403)
        }
        if (currentUserid.toString() !== id) {
            return res.sendStatus(403)
        }
        next()
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const isAuthenticated = async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
    try {
        const sessionToken = req.cookies['SANGAM_AUTH']

        if (!sessionToken) {
            return res.sendStatus(403)
        }

        const existingUser = await getUserBysessionToken(sessionToken);
        if (!existingUser) {
            return res.sendStatus(403)
        }

        merge(req, {identity:existingUser})

        return next()
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}