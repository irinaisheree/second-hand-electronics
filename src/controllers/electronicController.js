const router = require('express').Router()

router.get('/search', (req, res) => {
    res.render('search')
})

router.get('/create', (req, res) => {
    res.render('electronic/create')
})
module.exports = router