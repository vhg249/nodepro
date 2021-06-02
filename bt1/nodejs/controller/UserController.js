const mysql = require('../tools/mysql');
const usermodel = require('../model/UserModel');
const e = require('express');

let getUsers = async (req, res, next) => {
    let result = await mysql.getUsers();
    res.json(result);
}

let getUserId = async (req, res, next) => {
    try {
        var userreq = usermodel.UserRequestFactor(req.body);
        var rs = await mysql.getUserById(userreq);
        var userresponse = usermodel.UserResponseFactor(rs);
        res.json(userresponse);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // let id = req.params.id;
    // let result = await mysql.getUserById(id);
    
    // if(result === null){
    //     res.status(404).json();
    // }
    // else{
    //     res.json(result);
    // }
}

let isExist = async (req, res, next) => {
    console.log(req.body)
    let id = req.body.id;
    let name = req.body.name;
    let result = await mysql.checkUserIsExist(id, name);
    
    if(result == null) res.json(false);
    else res.json(result);
}

let addNewUser = async(req, res, next) => {
    // check user da ton tai 
    try {
        let newUser = usermodel.AddUserFactor(req.body);
        await mysql.addNewUser(newUser);
        res.json("ok");
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // let name = req.body.user_name;
    // let password = req.body.user_password;
    // let age = req.body.user_age;
    
    // let result = await mysql.addNewUser(name, password, age);
    // res.json(result);
}

let deleteUser = async (req, res, next) => {
    try {
        var userreq = usermodel.UserRequestFactor(req.body);
        var rs = await mysql.deleteUser(userreq);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // let id = req.params.id;
    // console.log(req.params.id)
    // let result = await mysql.deleteUser(id);
    // res.json(true)
}

module.exports = {
    getUsers,
    getUserId,
    addNewUser,
    isExist,
    deleteUser
}