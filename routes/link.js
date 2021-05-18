const express = require('express');
const Link = require('../models/Link');
const router = express.Router();

/* set new link router */
router.get('/:link', (req, res) => {
  const link = req.params.link
  Link.find()
  .lean()
  .then(data => {
    return data.find(el => el.newRouter.toString() === link.toString())
  })
  .then(dataEl => res.redirect(`${dataEl.inputlink}`))

})

module.exports = router;
