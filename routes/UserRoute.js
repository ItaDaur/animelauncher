const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router();
router.get('/history', UserController.findAll);
router.get('/:email', UserController.findOne);
router.post('/registration', UserController.create);
router.patch('/:email', UserController.update);
router.delete('/:email', UserController.destroy);
module.exports = router