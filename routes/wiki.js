const express = require('express');
const router = express.Router();
const models = require('../models');

const {
  Page
} = require('../models');

const {
  addPage
} = require('../views');

const main = require('../views/main');

router.get('/', async (req, res, next) => {
  // const data = models.Page.findAll();
  // res.send(main(data));
  res.send('got to GET /wiki/');
});

router.post('/', async (req, res, next) => {
  const data = res.json(req.body);

  let slug = data.body.title.replace([/^ a - zA - Z\ d\ s/g], '');
  slug = slug.replace(/ /g, '_');

  console.log(slug);


  const page = new Page({
    title: data.title,
    content: data.content
  });
  try {
    await page.save();
    res.redirect('/jhd');
  } catch (error) {
    next(error);
  }
  res.send('got to POST /wiki/');
})

router.get('/add', async (req, res, next) => {
  res.send(addPage());
  // res.send('got to GET /wiki/add');
})

module.exports = router;
