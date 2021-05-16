var express = require('express');
const app = require('../app');
const Link = require('../models/Link');
var router = express.Router();
// const herokuLink = "https://damp-brushlands-77443.herokuapp.com/"
const herokuLink = "localhost:3000/"

let inputlink, newRouter
let i=10000
/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
router.post('/', (req, res) => {
  inputlink = req.body.inputlink;  
  const newLink = `${herokuLink}link/${i}`
  return Link.create({ inputlink, newRouter:i })
  .then(() => {
    i=i+1
    newRouter = i
    res.render('index', { title: 'Express', newLink })
  }) 
  .catch(error => console.log(error))
})
router.get('/link/:link', (req, res) => {
  const link = req.params.link
  console.log(link)
  Link.find()
  .lean()
  .then(data => {
    console.log(data)
    return data.find(el => el.newRouter.toString()===link.toString())
  })
  .then(dataEl => res.redirect(`${dataEl.inputlink}`))

})

module.exports = router;
