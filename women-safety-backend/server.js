const express = require('express');

const app = express();

app.use(express.json());

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Women Safety Backend is running!');
});

app.post('/test', (req, res) => {
  console.log(req.body);

  res.json({
    message: 'Data received successfully!',
    data: req.body
  });
});

app.post('/api/register', (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.status(400).json({
      message: 'All fields are required'
    });
  }

  console.log('New user:', {
    name,
    email,
    mobile
  });

  res.status(201).json({
    message: 'Registration successful!',
    user: {
      name,
      email,
      mobile
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
