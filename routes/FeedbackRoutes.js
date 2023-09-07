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

// router.get("/", async (req, res) => {
//   try {
//     const feedback = await Feedback.find({})
//       .populate('userId', 'username') // Populate the 'userId' field with 'username'
//       .select('-userId.password'); // Exclude password field
  
//     res.status(200).json(feedback);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching feedback' });
//   }
// });

   router.post('/', (req, res) => {
    const { username, text, userId } = req.body;
  
    const dbFeedback = {
      username: username,
      text: text,
      userId: userId, // Include the user ID
      timestamp: Date.now(), // You might want to use the correct spelling here
    };
  
    Feedback.create(dbFeedback)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
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
