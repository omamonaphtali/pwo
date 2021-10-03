const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('gallery/gallery', { title: 'Gallery | Peace Warriors Organization' });
});

router.get('/women-in-sports', (req, res) => {
  res.render('gallery/women-in-sports', { title: 'Women in Sports for Peace Building | Peace Warriors Organization' });
});

router.get('/covid', (req, res) => {
  res.render('gallery/covid', { title: 'COVID Charity | Peace Warriors Organization' });
});

router.get('/mentorship', (req, res) => {
  res.render('gallery/mentorship', { title: 'Girls\' Mentorship | Peace Warriors Organization' });
});

router.get('/kianyaga', (req, res) => {
  res.render('gallery/kianyaga', { title: 'Kianyaga Children\'s Home Visit | Peace Warriors Organization' });
});

router.get('/peace-dinner', (req, res) => {
  res.render('gallery/peace', { title: 'Peace Dinner | Peace Warriors Organization' });
});

router.get('/chebilat', (req, res) => {
  res.render('gallery/chebilat', { title: 'Chebilat Town Peace Drive | Peace Warriors Organization' });
});

router.get('/school-greening', (req, res) => {
  res.render('gallery/greening', { title: 'School Greening Program | Peace Warriors Organization' });
});

router.get('/tree-planting', (req, res) => {
  res.render('gallery/tree-planting', { title: 'Tree Planting Program | Peace Warriors Organization' });
});

router.get('/kiandutu', (req, res) => {
  res.render('gallery/Kiandutu', { title: 'Kiandutu Clean Up | Peace Warriors Organization' });
});

module.exports = router;
