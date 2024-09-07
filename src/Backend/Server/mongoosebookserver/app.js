const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const bookRoutes = require('./bookRoutes');
const errorHandler = require('./errorHandler');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', bookRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
