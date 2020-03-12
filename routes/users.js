var express = require("express");
var sayHello = require("../services/userService");

var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  var message = sayHello(req.query.name);
  res.send(message);
});

module.exports = router;
