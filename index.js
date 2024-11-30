const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.set('views', path.join(__dirname, 'views')); 

app.get('/',function(req,res){
    fs.readdir('./files',function(err,files){
        res.render('index',{files:files}); //object of files ko send kro files kay name say  
                                            // this is array      
    })
})
app.listen(3000,function(params) {
    console.log("listening..")
})