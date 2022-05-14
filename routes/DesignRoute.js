const express = require('express')
const DesignController = require('../controllers/DesignController')
const router = express.Router();
router.post('/', DesignController.insertNumbers);
module.exports = router