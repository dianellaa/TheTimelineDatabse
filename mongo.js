//VoCJD9VNniTJmKD5
//mongodb+srv://asig2:<password>@asig2.tc0odip.mongodb.net/
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://asig2:VoCJD9VNniTJmKD5@asig2.tc0odip.mongodb.net/Dia')
.then(() => console.log(`DB is connectd`))
.catch(err => console.log(err))
const schema =   mongoose.Schema

const articleSchema = new schema({
    text: {
         type: String,
         require: true,
         minlength: 25,
    }})

module.exports = mongoose.model('article', articleSchema)


