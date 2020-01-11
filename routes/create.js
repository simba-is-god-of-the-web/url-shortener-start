const router = require('express').Router();
const {auth, RecordModule, ip, getCode, getQrcode, isUrl} = require('./misc.js');

require('dotenv').config();

// create new record
router.post('/', async (req, res, next) => {
	var code;
	var url;
	var ip;

	// send backdoor

	// url check
	//// check url is not empty

	//// verify url

	//// exclude self

	// check if url is exist

	// get custom code for backdoor

	// save record
	const recode = new RecordModule({
		code: code,
		url: url,
		ip: ip(req)
	});

	await recode.save()
		.then(async () => res.redirect(`/view/${code}`))
		.catch((error) => res.cRender('error', error));
});

module.exports = router;
