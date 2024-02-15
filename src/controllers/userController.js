const router = require('express').Router()
const {getErrorMessage} = require('../utils/errorUtils')
const userManager = require('../managers/userManager')

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', async (req, res) => {
    const userData = req.body
    try {
        await userManager.register(userData)
        await userManager.login(userData)
        res.redirect("/")
    } catch (error) {
        res.render('auth/register', { ...userData, error: getErrorMessage(error)})
    }
})

router.get('/login', (req, res) => {
    res.render('auth/login')
})

module.exports = router