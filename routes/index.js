const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Peace Warriors Organization' });
});

// GET about page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About | Peace Warriors Organization' });
});

// GET contacts page
router.get('/contacts', (req, res) => {
  res.render('contacts', { title: 'Contact Us | Peace Warriors Organization' });
});

module.exports = router;
