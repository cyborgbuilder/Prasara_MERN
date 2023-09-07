const path = require('path');
const fs = require('fs'); 
const express = require('express');
const ImageModel = require('../models/BlogModel.js'); 
const router = express.Router();
const upload = require('../Storage.js');


const uploadDir = path.join(__dirname, '../client/public/uploads');

router.post("/", (req, res) => {
  upload(req, res, (err) => {
      if (err) {
          console.log(err);
      } else {
          const newImage = new ImageModel({
              username: req.body.username,
              title: req.body.title,
              content: req.body.content,
              image: {
                  data: req.file.filename,
                  contentType: req.file.mimetype,
              },
          });
          console.log(newImage)
          newImage.save()
              .then(() => res.send("Upload done"))
              .catch((err) => console.log(err));
      }
  });
});

router.get('/', async (req, res) => {
    try {

      const images = await ImageModel.find({});
  
    
      const imageInfo = images.map((image) => ({
        _id: image._id, 
        username: image.username,
        title: image.title,
        content: image.content,
        imageUrl: `/uploads/${image.image.data}`,
      }));
  

      res.json(imageInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Error fetching images' });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const postId = req.params.id; // Get the post ID from the URL parameter
  
      // Find the post in the database by its ID
      const post = await ImageModel.findById(postId);
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // Construct the response object
      const postInfo = {
        _id: post._id,
        username: post.username,
        title: post.title,
        content: post.content,
        imageUrl: `/uploads/${post.image.data}`,
      };
  
      // Send the post details as the response
      res.json(postInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Error fetching post' });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      
      // Find the post by ID and delete it from the collection
      const deletedPost = await ImageModel.findByIdAndDelete(postId);
  
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // Delete the associated image file from the uploads folder
      const imagePath = path.join(uploadDir, deletedPost.image.data.toString());
      fs.unlinkSync(imagePath);
  
      res.json({ message: 'Post deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Error deleting post' });
    }
  });

  module.exports = router;