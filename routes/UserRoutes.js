const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const UserModel = require('../models/UserModel');

// Register route
router.post('/register', async (req, res) => {
  try {
    const { fullname, username, password, email, phoneNumber, address } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      
      username,
      fullname,
      password: hashedPassword,
      email, 
      phoneNumber,
      address
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    let isAdmin = false;
    let isOwner = false;
    let isLoggedIn = false;

    if (username === 'admin' && password === 'admin123') {
      isAdmin = true;
    } else if (username === 'owner' && password === 'owner123') {
      isOwner = true;
    } else {
      isLoggedIn = true;
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin, isOwner, isLoggedIn, username },
      process.env.JWT_SECRET_KEY
    );

    res.json({
      token,
      isAdmin,
      isOwner,
      username,
      user 
    });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});


router.get('/', async (req, res) => {
    try {
      const users = await User.find({}, '-password'); // Exclude password field
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' });
    }
  });

router.get('/:userId', async (req, res) => {
  try{
    const userId = req.params.userId;
    const user = await UserModel.findById(userId).exec();
    res.json(user);
  } catch(error){
    res.status(500).json({ message: 'Error fetching details'});
  }
})



  router.delete("/:id", async (req, res) => {
    try {
      const result = await User.findByIdAndDelete(req.params.id);
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