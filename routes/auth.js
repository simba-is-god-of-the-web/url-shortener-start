const crypto = require('crypto');
const {getCode} = require('./misc.js');
require('dotenv').config();

// user pool
var users = [];


function token(ip){
	var token = {};
	return token;
}

function verify(token){
}

module.exports = {
	token: token,
	verify: verify,
	users: users
}
