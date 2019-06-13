var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Peace Warriors Organization' });
});

// GET about page
router.get('/about', (req, res, next) => {
  res.render('about', {title: 'About | Peace Warriors Organization'});
});

// GET contacts page
router.get('/contacts', (req, res, next) => {
  res.render('contacts', {title: 'Contact Us | Peace Warriors Organization'});
});

module.exports = router;
