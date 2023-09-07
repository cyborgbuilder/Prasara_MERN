const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({

  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  image: {
    data: Buffer,
    contentType: String,
    
  }
});

module.exports = ImageModel = mongoose.model('ImageModel', ImageSchema);