var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/programs', function(req, res, next) {
  res.render('programs', { title: 'Express' });
});

router.get('/program', function(req, res, next) {
  res.render('program', { title: 'Express' });
});

router.get('/prospect', function(req, res, next) {
  res.render('prospect', { title: 'Express' });
});

router.get('/results', function(req, res, next) {
  res.render('results', { title: 'Express' });
});

router.get('/programdetail', function(req, res, next) {
  res.render('programdetail', { title: 'Express' });
});

router.get('/grantprogram', function(req, res, next) {
  res.render('grantprogram', { title: 'Express' });
});


router.get('/application', function(req, res, next) {
  res.render('application', { title: 'Express' });
});

router.get('/prospect', function(req, res, next) {
  res.render('prospect', { title: 'Express' });
});

router.get('/expressapply', function(req, res, next) {
  res.render('quickapply', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Express' });
});

router.get('/success', function(req, res, next) {
  res.render('success', { title: 'Express', layout: false });
});

router.get('/splash', function(req, res, next) {
  res.render('splash', { title: 'Express', layout: false });
});


module.exports = router;
