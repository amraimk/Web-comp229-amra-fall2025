const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Root route for health check
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Listen on Render's port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
