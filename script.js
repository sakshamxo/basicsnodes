const express = require('express');
const app = express();
const path = require('path');
const arr = require('./config/helper');
const fs = require('fs')


app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.render('index',{data:arr})
})   
app.get('/user/:username',function(req,res){
     res.render('index2',{
            username:req.params.username,data:arr
        })
    })

 
app.listen(3000);