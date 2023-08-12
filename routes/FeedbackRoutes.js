const express = require('express');
const Feedback = require('../models/Feedback.js'); 
const router = express.Router();

 router.get("/", (req, res) => {
     Feedback.find()
       .then((data) => {
          res.status(200).send(data)
       })
       .catch((err) => {
         res.status(500).send(err)
       })
   });

//  router.get('/', async (req, res) => {
//    try {
//      const images = await Feedback.find({});
//      const imageInfo = images.map((image) => ({
//        name: image.name,
//        imageUrl: `/uploads/${image.image.data}`,
//      }));
//      res.json(imageInfo);
//    } catch (err) {
//      console.log(err);
//      res.status(500).json({ error: 'Error fetching images' });
//    }
//  });

  router.post('/', (req, res) => {
    const dbFeedback = req.body;
  
    Feedback.create(dbFeedback)
      .then((data) => {
        res.status(201).send(data)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
    });

    router.delete("/:id", async (req, res) => {
        try {
          const result = await Feedback.findByIdAndDelete(req.params.id);
          if (!result) {
            return res.status(404).send("item not found");
          }
          res.json(result);
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      });

module.exports = router;
