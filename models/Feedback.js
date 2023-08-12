const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    username: {
        type: String,
        require: true
        
    },
    text: {
        type: String,
        require: true
        
    },
    timesTamp: {
        type: String,
        default: Date.now()
    }
})

module.exports = FeedbackModel = mongoose.model('feedbackModel', FeedbackSchema);