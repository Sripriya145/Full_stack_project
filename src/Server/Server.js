const express = require('express');
const mongoose = require('mongoose');
const Image = require('../Server/model/themeimg');
const FAQ =require('../Server/model/faq');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/faqDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//faq
app.get('/faqs', async (req, res) => {
  const faqs = await FAQ.find();
  res.json(faqs);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
