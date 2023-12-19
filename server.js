const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const FeedbackRoutes = require('./routes/FeedbackRoutes.js');
const BlogRoutes = require('./routes/BlogRoutes.js');
const UserRoutes = require('./routes/UserRoutes.js');
const OrderRoutes = require('./routes/OrderRoutes.js');
const PaymentRoutes = require('./routes/PaymentRoutes.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

mongoose.connect(process.env.mongo_ID, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(PaymentRoutes);

app.use('/feedback/sync', FeedbackRoutes);
app.use('/feedback/new', FeedbackRoutes);
app.use('/feedback/delete', FeedbackRoutes);
app.use('/blog', BlogRoutes);
app.use('/user', UserRoutes);
app.use('/order', OrderRoutes);

app.listen(port, () => console.log(`Server is listening on localhost:${port}`));

