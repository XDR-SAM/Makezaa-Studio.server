const express = require('express');
const app = express();

// Middleware to parse JSON (optional but recommended)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is live on Vercel!');
});

app.get('/api/test', (req, res) => {
  res.json({
    message: "Test successful",
    timestamp: new Date().toISOString()
  });
});

// Export the app for Vercel's serverless handler
module.exports = app;

// Listen only if running locally
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local server: http://localhost:${PORT}`);
  });
}