import { UserModel } from "../models/userSchema"


export const getUsers = ()=> UserModel.find();

export const getuserByEmail = (email:string) => UserModel.findOne({email});

export const getUserBysessionToken = (sessionToken:string)=> UserModel.findOne({
    'authentication.sessionToken':sessionToken
});

export const getUserbyId = (id:string)=> UserModel.findById(id);

export const createUser = (values: Record<string, any>)=> new UserModel(values).save().then((user)=> user.toObject())

export const deleteUserbyId = (id:string)=>UserModel.findOneAndDelete({_id:id})

export const updateUserbyId = (id:string, values:Record<string,any>)=> UserModel.findByIdAndUpdate(id,values)

