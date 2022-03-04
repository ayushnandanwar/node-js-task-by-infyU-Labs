const express = require('express')
const methodOverride = require('method-override')
const app =express();
const customerRouter = require('./routes/customerRoutes');

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

app.use('/customers',customerRouter);
app.get('/',(req,res)=>{
    res.render('form',{
        action:"Create Customer",
        slug:"customers/insert",
        data:{
            user_name:"",
            user_email:"",
            user_password:"",
            user_image:""
        }
    });
})


app.get("*",(req,res)=>{
    res.status(404).send("BAD GATEWAY");
})
module.exports = app;