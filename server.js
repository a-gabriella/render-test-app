// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple home route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Render Test App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
          }
          h1 { margin: 0 0 1rem 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Hello from Render!</h1>
          <p>Your app is successfully deployed!</p>
          <p>Server time: ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `);
});

// API endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    message: 'API is working!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
