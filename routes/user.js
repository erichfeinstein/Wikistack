const express = require('express');
const router = express.Router();
const models = require('../models');

module.exports = router;

router.get('/', async (req, res, next) => {
  res.send('got to GET /users/');
});

router.post('/', async (req, res, next) => {
  res.send('got to POST /users/');
})

// router.get('/:id', async (req, res, next) => {
//   res.send();
// })
