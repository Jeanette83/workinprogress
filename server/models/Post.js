const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema ({
    image: {
        type: String
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
    }
   

    
});

module.exports = mongoose.model('Post', postSchema)
