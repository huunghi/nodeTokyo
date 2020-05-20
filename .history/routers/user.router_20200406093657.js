const express = require('express');
const shortid = require('shortid');
const db = require('../db');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.createView);
router.post('/create', controller.create);
router.get('/:id', controller.view);

module.exports = router;