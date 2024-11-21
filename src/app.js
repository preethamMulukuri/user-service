const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.set('strictQuery', true); // Suppress the deprecation warning

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5001, () => console.log('User Service running on port 5001')))
    .catch(err => console.log(err));
