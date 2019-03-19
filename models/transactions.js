const Promise  = require('bluebird');

const db = require('./dbconnection').db;
const util = require('../utils');

var test_db = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM tb_transactions WHERE 1`;
        db.query(sql, (error, result, fields) => {
            if(error){
                reject(error);
            }
            resolve(result);
        });
    });
}

var test = async (req, res) => {
    try{
        var result = await test_db();
        // res.send({
        //     status: "success",
        //     data: result
        // });
        res.send(result);
    }catch(error){
        console.log("Error: " + error);
        res.send({
            status: "error"
        })
    }
}

module.exports = {
    test
}