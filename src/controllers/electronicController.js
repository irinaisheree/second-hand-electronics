const router = require('express').Router()
const electronicManager = require('../managers/electronicManager')
const {getErrorMessage} = require('../utils/errorUtils')
const {isAuth} = require('../middlewares/authMiddleware')

router.get('/search', (req, res) => {
    res.render('search')
})

router.get('/create', isAuth, (req, res) => {
    res.render('electronic/create')
})

router.post('/create', isAuth, async(req, res) => {
    const newElectronic = req.body
    try{
        await electronicManager.create(req.user._id, newElectronic);
        res.redirect('/catalog')
       }catch(err){
        const message = getErrorMessage(err)
        res.status(400).render("electronic/create", {...newElectronic, error: message})
       }
    })

router.get('/catalog', async (req, res) => {
    const electronics = await electronicManager.getAll().lean()
    res.render('catalog', {electronics})
})

router.get('/:electronicId/details', async(req, res) => {

    const electronicId = req.params.electronicId
    try{
        const electronic = await electronicManager.getOneWithOwner(electronicId).lean()
        const isOwner = electronic.owner && electronic.owner == req.user?._id//movie.owner(object) ==  req.user._id(string) (convirts them to the same type)
        // const casts = await castManager.getByIds(movie.casts).lean() //--- only if populate is not used(populates the cast info into the movie with the ref: Cast in the Movie Schema)
        res.render('electronic/details', {electronic, isOwner})
} catch(error){
    res.status(400).redirect('/404')
}

})

module.exports = router