const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
title:{
    type: String,
    required:true,
},
price:{
    type: Number,
    required:true,
    unique:true
},
maxPeople:{
    type: Number,
    required:true,
    unique:true
},
desc:{
    type: String,
    required:true
},
roomNumbers:[
{
number:Number,unavailable:[{type:[Date]}]}],
},{timestamps:true});

const Room = new mongoose.model('Room', RoomSchema);
module.exports = Room;