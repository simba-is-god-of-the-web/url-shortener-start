const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.cRender('error', {
		error: {
			status: 400,
			stack: 'something'
		}
	});
});

module.exports = router;
