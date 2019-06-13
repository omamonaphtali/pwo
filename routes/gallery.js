var express = require('express');
var galleryRouter = express.Router();

function router () {
  const images = [
    {
      source: '/images/mentorship.png',
      tag: 'all',
      caption: 'Mentoring the future leaders',
    },
  ];

  galleryRouter.route('/')
    .get((req, res, next) => {
      res.render('gallery', 
        {
          title: "Gallery | Peace Warriors Organization",
          images: images,
        });
    });
  return galleryRouter;
}

module.exports = router;
