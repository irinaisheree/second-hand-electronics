const Electronic = require('../models/Electronic');
const User = require('../models/User')

exports.getOne = (electronicId) => Electronic.findById(electronicId)
// exports.getThree = () => Course.find().sort({ _id: -1 }).limit(3)
exports.getAll = () => Electronic.find()

exports.getOneWithOwner = (electronicId) => this.getOne(electronicId).populate('owner')

exports.create =  (userId, electronicData) => {
    const createdElectronic = Electronic.create({
        owner: userId,
        ...electronicData
    })

     User.findByIdAndUpdate(userId, {$push: {createdElectronics: createdElectronic._id}})
    return createdElectronic
}

exports.edit = (electronicId, electronicData) => Electronic.findByIdAndUpdate(electronicId, electronicData,{runValidators: true})
// exports.signUp = async(courseId, userId) => {
// //    const course = await Course.findById(courseId)
// //    const user = await User.findById(userId)

// //    course.signedUpList.push(userId)
// //    user.signedUpCourses.push(courseId)

// //    await course.save()
// //    await user.save()

// // same logic - I can choose one or another

// await Course.findByIdAndUpdate(courseId, {$push: {signedUpList : userId}})
// await User.findByIdAndUpdate(userId, {$push: {signedUpCourses : courseId}})
// return {Course, User}
// }