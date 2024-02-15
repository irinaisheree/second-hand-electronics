const router = require('express').Router()

router.get('/search', (req, res) => {
    res.render('search')
})

router.get('/create', (req, res) => {
    res.render('electronic/create')
})

router.get('/catalog', (req, res) => {
    res.render('catalog')
})
module.exports = router