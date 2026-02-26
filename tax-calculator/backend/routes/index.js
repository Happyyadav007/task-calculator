const express = require('express');
const taxRoutes = require('./taxRoutes');

const router = express.Router();

router.use('/', taxRoutes);

module.exports = router;
