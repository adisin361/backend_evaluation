const express = require('express');
const middlewares = require('../middleware/validateBody');
const middlewares2 = require('../middleware/idValidation');
const companyControllers = require('../controllers/companyController');
const router = express.Router();

router
  .route('/save')
  .post(middlewares, companyControllers.save);
router
  .route('/update')
  .patch(middlewares2, companyControllers.updateCompany);

module.exports = router;



