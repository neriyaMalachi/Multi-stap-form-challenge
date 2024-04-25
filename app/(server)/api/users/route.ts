import express from "express";
import fs from 'fs'
import { NextResponse } from "next/server";
import path from "path";
import connectMongodb from "../../mongodbConect";
import User from "../../models/usersModel";

export async function POST(req:Request,res:Response) {
  const {user}=await req.json()
  console.log(user);
  
  await connectMongodb()
  await User.create({user})
  console.log("in server");
  return NextResponse.json({success:true,message:"success !!!"},{status:201});
}


