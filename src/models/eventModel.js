const mongoose = require("mongoose")


const eventSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    dateTime:{
        type:String
    },


})

module.exports= mongoose.model('event',eventSchema)