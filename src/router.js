const {Router} = require('express');
 
const router = Router();

router.get('/', function(req, res) {
    res.render("home");
  });
  router.get('/two', function(req, res) {
    res.render("two");
  });
  router.get('/legion', function(req, res) {
    res.render("legion");
  });
  module.exports = router;