var express = require('express');
const Link = require('../models/Link');
var router = express.Router();
const herokuLink = process.env.MONGODB_URI ? "https://damp-brushlands-77443.herokuapp.com/" : "localhost:3000/"
const { generateString, routerMatch } = require('../public/javascripts/util')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'url shortener' });
});
router.post('/', (req, res) => {
  //防止有重覆的網址組合出現
  const inputlink = req.body.inputlink
  let i = generateString(5)
  let linkArr = Link.find().lean()
  while(routerMatch(linkArr,i)){i = generateString(5)}

  const newLink = `${herokuLink}link/${i}`
  return Link.create({ inputlink, newRouter:i })
  .then(() => {    
    newRouter = i
    res.render('index', { title: 'url shortener', newLink })
  }) 
  .catch(error => console.log(error))
})


module.exports = router;
