const express = require('express');
const router = express.Router();
const models = require('../models');

const wikipage = require('../views/wikipage')

function generateSlug(title) {
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

const {
  Page
} = require('../models');

const {
  addPage
} = require('../views');

const main = require('../views/main');

router.get('/', async (req, res, next) => {
  const data = await Page.findAll();
  console.log(data);
  res.send(main(data));
});

router.post('/', async (req, res, next) => {
  const data = req.body;
  const page = new Page({
    title: data.title,
    content: data.content,
    slug: generateSlug(data.title)
  });
  try {
    console.log('page is ' + page)
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
})

router.get('/add', async (req, res, next) => {
  res.send(addPage());
  // res.send('got to GET /wiki/add');
})

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.send(wikipage(page));
  } catch (err) {
    console.error(err)
  }
});

module.exports = router;
