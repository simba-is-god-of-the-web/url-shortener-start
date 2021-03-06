const ip = (req) => (req.headers['x-forwarded-for'] || req.connection.remoteAddress).replace('::ffff:', '');
const auth = require('./auth.js');
const {RecordModule} = require('../schema/record.js');
const Qrcode = require('qrcode');
const base58 = require('base-58');
const crypto = require('crypto');

// functions
// get qrcode
const getQrcode = async (code) => {
	var qrcode;
	await Qrcode.toDataURL(`${process.env.BASEURL}/${code}`)
		.then((url) => qrcode = url);
	return qrcode;
}

//// get random code
const getCode = () => base58.encode(crypto.randomBytes(4));

//// verify url
const isUrl = (url) => {

};

//// cRender custom render
function cRender(req, res, next){
	console.log('cRender loaded');
	
	next();
}


module.exports = {
	auth: auth,
	RecordModule: RecordModule,
	ip: ip,
	getQrcode: getQrcode,
	getCode: getCode,
	isUrl: isUrl,
	cRender: cRender
}
