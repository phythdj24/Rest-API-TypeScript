import express from "express";
import authroute from "./authroute";
import users from "./users";
const router = express.Router()

export default (): express.Router => {
    authroute(router)
    users(router)
    return router
};