let _ = require('lodash');
let users = [
    {
        "id": 1,
        "name": "Quang"
    },
    {
        "id": 2,
        "name": "Thang"
    }
];
let length = 2;

const timeNow = (req, res) => {
    const time = new Date().toLocaleString("vi");
    res.send({
        time: time     
    })
}

const addUser = (req, res) => {
    const user = req.body;
    if (user) {
        user.id = length + 1;
        users.push(user);
        length++;
        res.send({
            message: "Create new user successfully",
        })
    }
}

const getAllUser = (req, res) => {
    if (users.length > 0) {
        res.send({
            data: users,
        });
    } else {
        res.send({
            message: "No user!!!"
        })
    }
}

const getUserById = (req, res) => {
    const id = req.params.id;
    const listUser = users.filter((user) => user.id === Number(id));
    if (listUser) {
        res.send({
            data: listUser
        })
    } else {
        res.send({
            message: "user khong ton tai!"
        })
    }
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    const deletedUser = _.remove(users, user => user.id === Number(id))
    if(deletedUser.length > 0) {
        res.send({
            message: "Xoa thanh cong"
        })
    } else {
        res.send({
            message: "User khong ton tai"
        })
    }
}

module.exports = {
    timeNow,
    addUser,
    getAllUser,
    getUserById,
    deleteUser,
}