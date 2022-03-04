const Customer = require('../models/customerModel')

exports.getAllCustomers = async(req,res)=>{
    try{
        const customers = await Customer.find();
        res.render('index',{
            status:"success",
            count: customers.length, 
            data:customers
        })
    }catch(err){
        res.json({
            status:"failure",
            message:err.message
        })
    }
    
}
exports.getCustomer = async (req,res)=>{
    try{
        const customer  = await Customer.findOne({user_id:req.params.user_id}) 
        res.json({
            succes:"succes",
            data:customer
        })
    }catch(err){
        res.json({
            status:"failure",
            message:err.message
        })
    }
}

exports.createCustomer = async (req,res)=>{
    try{
        const customer = await Customer.create({
            user_name:req.body.user_name,
            user_email:req.body.user_email,
            user_password:req.body.user_password,
            user_image:req.body.user_image,
        })
        res.redirect('/customers')

    }catch(err){
        res.json({
            status:"failure",
            message:err.message
        })
    }
}

exports.updateCustomer = async(req,res)=>{
    try{
        const customer = await Customer.updateOne({user_id:req.params.user_id},{
            user_name:req.body.user_name,
            user_email:req.body.user_email,
            user_password:req.body.user_password,
            user_image:req.body.user_image,
        })
        res.redirect('/customers')

    }catch(err){
        res.json({
            status:"failure",
            message:err.message
        })
    }
}
exports.updateCustomerForm = async (req,res)=>{
    try{
        const customer = await Customer.findOne({user_id:req.params.user_id})
        res.render('form',{
            status:"succes",
            data:customer,
            action:"Update Customer",
            slug:`${customer.user_id}?_method="PUT"`
        })
    }catch(err){
        res.json({
            status:"failure",
            message:err.message
        })
    }
}

exports.deleteCustomer = async (req,res)=>{
    try{
        const customer = await Customer.deleteOne({user_id:req.params.user_id})
        res.redirect('/customers')

    }catch(err){
        res.json({
            status:"failure",
            message:err.message
        })
    }
}
exports.getImage = async (req,res)=>{
    try{
        const customer  = await Customer.findOne({user_id:req.params.user_id}) 
        res.json({
            succes:"succes",
            data:customer.user_image
        })
    }catch(err){
        res.json({
            status:"failure",
            message:err.message
        })
    }
}