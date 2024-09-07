const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/PetStore'; // Connect to the PetStore database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for the cats collection
const catSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  color: String,
  favoriteToy: String
});

const Cat = mongoose.model('Cat', catSchema, 'cats');

// CRUD Operations

// Read: Fetch all cats (already implemented)
app.get('/api/cats', async (req, res) => {
  try {
    const cats = await Cat.find(); // Fetch all documents from the cats collection
    console.log('Cats fetched:', cats); // Log the cat data
    res.json(cats);
  } catch (err) {
    console.error('Fetch error:', err); // Log errors
    res.status(500).json({ error: err.message });
  }
});

// Create: Add a new cat
app.post('/api/cats', async (req, res) => {
  try {
    const newCat = new Cat(req.body); // Create a new cat document from the request body
    const savedCat = await newCat.save(); // Save the new cat to the database
    res.status(201).json(savedCat); // Return the saved cat
  } catch (err) {
    console.error('Create error:', err); // Log errors
    res.status(500).json({ error: err.message });
  }
});

// Update: Update a cat by ID
app.put('/api/cats/:id', async (req, res) => {
  try {
    const updatedCat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true // Validate the update against the schema
    });
    if (!updatedCat) {
      return res.status(404).json({ error: 'Cat not found' }); // Return 404 if the cat doesn't exist
    }
    res.json(updatedCat); // Return the updated cat
  } catch (err) {
    console.error('Update error:', err); // Log errors
    res.status(500).json({ error: err.message });
  }
});

// Delete: Remove a cat by ID
app.delete('/api/cats/:id', async (req, res) => {
  try {
    const deletedCat = await Cat.findByIdAndDelete(req.params.id); // Find the cat by ID and delete it
    if (!deletedCat) {
      return res.status(404).json({ error: 'Cat not found' }); // Return 404 if the cat doesn't exist
    }
    res.json({ message: 'Cat deleted successfully' }); // Confirm deletion
  } catch (err) {
    console.error('Delete error:', err); // Log errors
    res.status(500).json({ error: err.message });
  }
});

// Serve static files if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
