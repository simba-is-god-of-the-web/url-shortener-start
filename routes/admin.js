const router = require('express').Router();
const moment = require('moment-timezone');
const {auth, RecordModule, ip} = require('./misc.js');
require('dotenv').config();


router.get('/', async (req, res, next) => {
	// check if cookie is admin

	// get all record and send to client
	await RecordModule.find({}, (err, data) => {

	});
});

module.exports = router;
