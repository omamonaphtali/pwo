const createError = require('http-errors');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/gallery');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));

app.use('/', indexRouter);
app.use('/gallery', galleryRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at port: ${port}`);
});
