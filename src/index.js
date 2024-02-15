const expressConfig = require("./config/expressConfig")
const express = require("express")

const mongoose = require('mongoose')

const handlebarsConfig = require("./config/handlebarsConfig")
const app = express()

const routes = require('./routes')

expressConfig(app)
handlebarsConfig(app)


const PORT = 3000

app.use(routes)

mongoose.connect(`mongodb://127.0.0.1:27017/electronics`).then(()=>{ console.log(`DB connected`)

app.listen(PORT, () => 
    console.log(`Server is listening on port ${PORT}...`))

}).catch(err => console.log(`Cannot connect to DB`))