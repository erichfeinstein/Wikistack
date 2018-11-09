const express = require('express');
const router = express.Router();
const models = require('../models');

const addPage = require('../views/addPage');

const main = require('../views/main');

router.get('/', async (req, res, next) => {
  // const data = models.Page.findAll();
  // res.send(main(data));
  res.send('got to GET /wiki/');
});

router.post('/', async (req, res, next) => {
  res.send('got to POST /wiki/');
})

router.get('/add', async (req, res, next) => {
  res.send(addPage());
  // res.send('got to GET /wiki/add');
})

module.exports = router;
