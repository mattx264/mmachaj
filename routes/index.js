var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var MongoClient = require('mongodb').MongoClient

  var URL = 'mongodb://mmadmin:mmachaj123@ds061076.mlab.com:61076/mmachaj'

  MongoClient.connect(URL, function (err, db) {
    if (err) return

    var collection = db.collection('portfolio');
    //collection.insert({name: 'taco', tasty: true}, function(err, result) {
    collection.find().toArray(function (err, docs) {

      res.render('index', { portfolio: docs });
    })
    //})
    db.close()
  })


});

module.exports = router;
