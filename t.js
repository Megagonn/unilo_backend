const express = require('express');
const router = express.Router();
const userModel = require('../model/usermodel');
const jwt = require('jsonwebtoken');
const SECRET = 'SECRET';///add this to your .env file

const userController = require('../controller/user.controller');




router.get('/signup', userController.getSignUp);
router.get('/signin', userController.getSignIn);

router.post('/signup', (req, res)=>{
    userModel.find({email:req.body.email},(err, result)=>{
        if (result.length>0) {
            res.render('form.ejs', {status:false,message:"Email already exist!", })
        } else {
            
            let form = new userModel(req.body);
            form.save((err)=>{
                if (err) {
                    res.render('form.ejs', {status: false ,message: "err!!", })
                } else {
                    res.render('form.ejs', {status: true,message: "successful sign up", });
                }
            });
        }
    })
    // let obj = {...req.body};
    // console.log(obj);
    // allStudents.push(obj);
    res.render('form.ejs', {message: 'Successful sign up'});
})
router.post('/signin', (req, res)=>{
    userModel.find({email:req.body.email, pword:req.body.pword},(err, result)=>{
        if (err) {
            console.log('an error occured');
            res.render('signin.ejs', {status:false, message: "internal server error"})
        } else {
            ///validator
            result.validator(req.body.pword, (err, same)=>{
                if (err) {
                    console.log('not work');
                } else {
                    if (same) {
                        
                    } else {
                        
                    }
                }
            })
            if (result.length == 0) {
                res.render('signin.ejs',{status:false, message:'invalid credential'})
            } else {
                res.redirect('/alluser.ejs');
            }
        }
    })
    let {email, pword}= req.body;
    let found = allStudents.find((value, index)=>((value.email == email) && (value.pword == pword)));
    console.log(found);
    if (found) {
        res.send('success');
    } else {
        res.render('signin.ejs', {message: "Invalid account"})
    }
})

router.get('/admin/:id', (req, res)=>{
    console.log(req.params.id);
   let found = allStudents.find((val, index)=>(index == req.params.id))
    res.render('oneuser.ejs',{details: found});
})

router.get('/alluser', (req, res)=>{
    userModel.find((err, result)=>{
        if(err){
            console.log(err);
        } else{
            if (result.length>0) {
                console.log(result)
                res.render('alluser.ejs',{result})
            }
        }
     })
    // res.send('525825823');
})
router.get('/getdetails', (req,res)=>{
    userModel.find((err, result)=>{
        if(err){
            console.log(err);
        } else{
            if (result.length>0) {
                console.log(result)
                res.send(result)
            }
        }
     })
    // res.send('hello wolrd');
})
module.exports = router;

const getSignUp =(req,res)=>{
    res.render('form.ejs', {status:"empty", message:'' });
}

const getSignIn = (req,res)=>{
    res.render('signin.ejs',{status:"empty", message:'' });
}

module.exports = {getSignUp, getSignIn}