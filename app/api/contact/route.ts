import { NextRequest, NextResponse } from "next/server";
import React from "react";
import mongoose from "mongoose";
import Message from '../../../models/Message'

export async function POST(req:NextRequest, res:NextResponse){
    const MONGODB_URI = process.env.MONGODB_URI
    // let client
    try {
        await mongoose.connect (MONGODB_URI)
        // client = await mongoose.connect (MONGODB_URI)
        console.log("DB connected");
    } catch (error) {
        console.log('there was a connection error to the DB',error);
    }
    const data = await req.json()
    const {name, email, company, message} = data
    // The above comes  from the request (by the submit function)
    if (!name || !company || !email || !email.includes('@') || message.trim()==='' || 
    name.trim()===''){
        NextResponse.json({message: 'Invalid input - fill all the fields'},{status:422})
        return
    }
    const newData = {...data, date:new Date()}
    try {
        await Message.create(newData)
        console.log('Message sent')
        return NextResponse.json({message: 'Message Sent', status:201})
    } catch (error) {
        console.log('Message failed to create', error)
        return NextResponse.json('Failed to create a new prompt', {status:500})
    }
}