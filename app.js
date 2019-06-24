const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const less = require('less-middleware');

const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/gallery');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(less(path.join(`${__dirname}/public`)));
app.use(express.static(path.join(__dirname, 'public')));

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

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
