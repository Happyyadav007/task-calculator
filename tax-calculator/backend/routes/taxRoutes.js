const express = require('express');
const taxController = require('../controllers/taxController');

const router = express.Router();
router.post('/calculate', taxController.calculate);
module.exports = router;
