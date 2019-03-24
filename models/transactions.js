const Promise  = require('bluebird');

const db = require('./dbconnection').db;
const util = require('../utils');

var test_db = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_SCHEMA='heroku_767712842d91f65'`;
        db.query(sql, (error, result, fields) => {
            if(error){
                reject(error);
            }
            resolve(result);
        });
    });
}

var test = async (req, res) =>{
	try{
		let result = await test_db();
		let response = {
			status: "success",
			data: result
		}
		res.send(response);
	}catch(error){
		console.log("ERROR: " + error);
		let response = {
			status: "failure",
			error
		}
		res.send(error);
	}
}


module.exports = {
    test
}
