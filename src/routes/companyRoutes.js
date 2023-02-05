const express = require('express');
const middlewares = require('../middleware/validateBody');
const companyControllers = require('../controllers/companyController');
const router = express.Router();

router.route('/save').post(middlewares, companyControllers.save);

module.exports = router;



