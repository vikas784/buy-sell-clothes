const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/menu', require('./routes/menu'));
app.use('/api/orders', require('./routes/orders'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Dosa Menu API is running!' });
});

// Test Supabase connection
const supabase = require('./config/supabase');
console.log('Supabase client initialized');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});