const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/booksdNew', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(' MongoDB Connected'))
.catch(err => console.error(' MongoDB connection error:', err));

// Routes
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

// Default route
app.get('/', (req, res) => {
    res.send(' Backend is running...');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
});
