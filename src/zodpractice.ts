import {z} from 'zod';
import express from "express";
const app=express();


//Define the schema for profile update
const userProfileschema=z.object({
    name:z.string().min(1,{message:"Name cannot be empty"}),
    email:z.string().email({message:"Invalid email format"}),
    age:z.number().min(18,{message:"You mest be at least 18 years old"}).optional(),
});

type FinalUserSchema=z.infer<typeof userProfileschema>;

app.put("/user",(req,res)=>{
    const {success}=userProfileschema.safeParse(req.body);
    const updateBody:FinalUserSchema=req.body;

    if(!success){
        res.status(411).json({});
        return;
    }
    res.json({
        message:"User updated"
    })
});