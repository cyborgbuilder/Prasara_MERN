const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Feedback = require('./models/Feedback.js');
const FeedbackRoutes = require('./routes/FeedbackRoutes.js');
const BlogRoutes = require('./routes/BlogRoutes.js');
const userRoutes = require('./routes/UserRoutes.js');
const orderRoutes = require('./routes/OrderRoutes.js')

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.mongo_ID)
.then(console.log("Database Connected"))
.catch((err) => console.log(err))
    
app.use('/feedback/sync', FeedbackRoutes);

app.use('/feedback/new', FeedbackRoutes);

app.use('/feedback/delete', FeedbackRoutes);

app.use('/blog', BlogRoutes);

app.use('/blog', BlogRoutes);

app.use('/user', userRoutes);

app.use('/order', orderRoutes);



app.listen(port, () => console.log(`listening on localhost ${port}`))