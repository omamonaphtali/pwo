const express = require('express');
const path = require('path');
const app = express();

// const forceSSL = function() {
//   return (req, res, next) => {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }

// app.use(forceSSL());

app.use(express.static('./dist/pwo'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/pwo/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server started');
});