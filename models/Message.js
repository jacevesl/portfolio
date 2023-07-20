import {Schema, model, models} from 'mongoose'
// const mongoose = require('mongoose')
const MessageSchema = new Schema({
  name: String,
  email: String,
//    {
//     type: String,
//     unique: [false, "Email already exists"],
//     required: [true, "Email is required"],
//   },
  company: String,
  message: String,
  date: Date
})
module.exports =
  models.Message ?? model("Message", MessageSchema);