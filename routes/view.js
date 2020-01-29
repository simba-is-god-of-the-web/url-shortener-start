const router = require('express').Router();
const {RecordModule, ip, getQrcode} = require('./misc.js');
require('dotenv').config();

router.post('/', (req, res, nect) => {
	res.redirect(`/view/${req.body.code.replace(/ /g, '')}`);
});

router.get('/', (req, res, next) => {
	res.cRender('view-index');
});

router.get('/:code', (req, res, next) => {
	const code;
	const record;
	
	// check if code found
	if(!record) return res.cRender('notFound', {
		code: code,
		baseUrl: process.env.BASEURL
	})

	res.cRender('view', {

	});
});

module.exports = router;
