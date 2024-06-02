const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://BlogWebsite:PeUHnbd6ulxww4Kw@cluster0.c0hdkgh.mongodb.net/Blogdatabase")

const QuestionSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    details:{
        type:String,
        require:true
    }
})

const BlogdbModel = mongoose.model("/data",QuestionSchema)

module.exports = {
    BlogdbModel
}
