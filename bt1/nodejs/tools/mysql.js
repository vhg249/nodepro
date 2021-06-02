const mysql = require('mysql2');

const settings = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodepro',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(settings);

const promisePool = pool.promise();

const getUsers = async () => {
    const sql = "SELECT * FROM  tbluser";
    const [rows, fields] = await promisePool.query(sql);
    return rows;
}

const getUserById = async (user_id) => {
    const sql = "SELECT * FROM  tbluser WHERE user_id = ?";
    const [rows, fields] = await promisePool.query(sql, [user_id]);
    if (rows.length > 0) {
        return rows[0];
    }
    else {
        return null;
    }
}

const checkUserIsExist = async (user_id, user_name) => {
    const sql = "SELECT * FROM tbluser WHERE user_id = ? AND user_name = ?";
    const [rows, fields] = await promisePool.query(sql, [user_id, user_name]);
    if(rows.length > 0){
        return rows[0];
    } else {
        return null;
    }
}

const addNewUser = async ({user_name, user_password, user_age}) => {
    // let newuser = {
    //     user_name: user_name,
    //     user_password: user_password,
    //     user_age: Number(user_age)
    // }
    const sql = "INSERT INTO tbluser (user_name, user_password, user_age) VALUES (?, ?, ?)";
    await promisePool.query(sql, [user_name, user_password, user_age]);
}

const deleteUser = async (user_id) => {
    const sql = "DELETE FROM tbluser WHERE user_id = ?";
    const [rows, fields] = await promisePool.query(sql, [user_id]);
}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    addNewUser: addNewUser,
    deleteUser: deleteUser,
    checkUserIsExist: checkUserIsExist
}