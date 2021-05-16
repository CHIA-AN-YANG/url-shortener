var express = require('express');
const Link = require('../models/Link');
var router = express.Router();
const herokuLink = "https://damp-brushlands-77443.herokuapp.com/"
const {generateString} = require('../public/javascripts/util')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
router.post('/', (req, res) => {
  const inputlink = req.body.inputlink
  const i = generateString(5)
  const newLink = `${herokuLink}link/${i}`
  return Link.create({ inputlink, newRouter:i })
  .then(() => {    
    newRouter = i
    res.render('index', { title: 'Express', newLink })
  }) 
  .catch(error => console.log(error))
})


module.exports = router;
