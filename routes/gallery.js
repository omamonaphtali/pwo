var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('gallery/gallery', {title: 'Gallery | Peace Warriors Organization'})
})

router.get('/mentorship', (req, res) => {
  res.render('gallery/mentorship', {title: 'Girls\' Mentorship | Peace Warriors Organization'})
})

router.get('/kianyaga', (req, res) => {
  res.render('gallery/kianyaga', {title: 'Kianyaga Children\'s Home Visit | Peace Warriors Organization'})
})

router.get('/peace-dinner', (req, res) => {
  res.render('gallery/peace', {title: 'Peace Dinner | Peace Warriors Organization'})
})

router.get('/chebilat', (req, res) => {
  res.render('gallery/chebilat', {title: 'Chebilat Town Peace Drive | Peace Warriors Organization'})
})

// function router () {
//   const images = [
//     {
//       source: '/images/mentorship.png',
//       tag: 'all',
//       caption: 'Mentoring the future leaders',
//     },
//   ];

//   galleryRouter.route('/')
//     .get((req, res, next) => {
//       res.render('gallery', 
//         {
//           title: "Gallery | Peace Warriors Organization",
//           images: images,
//         });
//     });
//   return galleryRouter;
// }

module.exports = router;
