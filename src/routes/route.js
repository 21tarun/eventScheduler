const express = require('express');
const router = express.Router();
const eventModel =require('../models/eventModel')
// const moment = require('moment')
const moment= require('moment-timezone')

const cron =require('node-cron')
const shell =require('shelljs')

router.post('/createEvent',async function(req,res){
    const data =req.body
    
    let dataForCreate={}
    if(!data.text) return res.status(400).send({status:false, message:"event text mandatory"})
    dataForCreate.text=data.text.trim()
    let date= data.year+'-'+data.month+'-'+data.day
    let time= data.hour+':'+data.minutes+':'+data.seconds
     
    dateTime=`${date} ${time}`
    
    
    

    
    

    dataForCreate.dateTime=dateTime

    const saveData=await eventModel.create(dataForCreate)

    
    res.status(201).send({status:true,message:"event scheduled",data:saveData})


})

list=[
    {text:"interview1", dateTime:"2023-02-10 21:12:20"},
    {text:"interview2", dateTime:"2023-02-10 21:13:20"},
    {text:"interview3", dateTime:"2023-02-10 21:15:20"},
    {text:"interview4", dateTime:"2023-02-10 21:56:20"},
    {text:"interview5", dateTime:"2023-02-10 21:13:20"},
    {text:"interview6", dateTime:"2023-02-10 21:13:20"},
    {text:"interview7", dateTime:"2023-02-10 21:13:20"},
    {text:"interview8", dateTime:"2023-02-10 21:13:20"},
    {text:"interview9", dateTime:"2023-02-10 21:13:20"},
    {text:"interview10", dateTime:"2023-02-10 21:13:20"},
    {text:"interview11", dateTime:"2023-02-10 21:13:20"}

]







module.exports=router;