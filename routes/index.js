var express = require('express');
var mongoose=require('mongoose');
var router = express.Router();
require('../models/enquiry');
var enquiry=mongoose.model('enqs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/enq', function(req, res) {
  new enquiry({name : req.body.name,
   rank :req.body.rank,
   text : req.body.text
  }
)
  .save(function(err, enquiry) {
    console.log('enqs');
    res.send(`<h1> Your Message has been saved<h1>`);
  });
});
module.exports = router;

// router.post('/',(res,req)=>{
// 	const out=$(req.body.prod_name),$(req.body.prod_features),$(req.body.prod_price);
// } )