const electronicManager = require('../managers/electronicManager')

exports.isOwner = async(req, res, next) => {
    const electronic = await electronicManager.getOne(req.params.electronicId).lean()
    if(electronic.owner._id?.toString() === req.user?._id.toString()){
       return res.redirect(`/${req.params.electronicId}/details`)
    }
    req.electronic = electronic
        next()
}

