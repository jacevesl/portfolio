import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
import path from 'path'
// Suggestion by the linter instead  of
// const fs =require('fs')
// const path =require('path')
export async function POST(request: NextRequest){
        const data = await request.json()
    // Read DB (JSON file)
        const filePath = path.resolve(process.cwd(),'app/data/submission.json')
    // The process.cwd() method returns the current working directory of the Node.js process.
        let submission:any=[]
        try {
            const data = fs.readFileSync(filePath, 'utf8')
            submission = JSON.parse(data)
        } catch (error) {
            console.log('Error reading file', error)
        }
    // Here we add the new data and write it back
        submission.push(data)
        try {
            const newData =JSON.stringify(submission, null, 2)
            fs.writeFileSync(filePath,newData, 'utf8')
        } catch (error) {
            console.log('Error writing file', error)
        }
        return NextResponse.json({
            data:data,
            message: 'This message has been successfully sent'
        })
    }