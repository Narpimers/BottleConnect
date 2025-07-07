import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
  {
    id: 1,
    name: 'Admin User',
    area: 'Amsterdam',
    phone: '1234567890',
    username: 'admin',
    password: '1234',
    tokens: [] 
  }
];

const ads = [
  { id: 1, userid: 1, area: 'Amsterdam Oost', bottles: 5, phone: '123-456-7890' },
  { id: 2, userid: 2, area: 'Amsterdam West', bottles: 3, phone: '987-654-3210' },
  { id: 3, userid: 3, area: 'Amsterdam Noord', bottles: 7, phone: '555-555-5555' },
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = uuidv4();
    user.tokens.push(token);
    return res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        area: user.area,
        phone: user.phone,
        username: user.username,
      }
    });
  } else {
    return res.status(401).json({ message: 'Username or Password is not correct' });
  }
});

router.post('/register', (req, res) => {
  if (!req.body.newUser) return res.status(400).json({ message: "No user data provided" });

  const { newUser } = req.body;

  const existingUser = users.find(u => u.username === newUser.username);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const userWithId = {
    ...newUser,
    id: uuidv4(),
    tokens: []
  };

  users.push(userWithId);
  return res.status(201).json({ message: "User registered successfully", user: userWithId });
});

router.get('/ads', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Not login' });
  }

  const user = users.find(u => u.tokens.includes(token));

  if (!user) {
    return res.status(401).json({ message: 'Not login' });
  }

  const userAds = ads.filter(ad => ad.userid === user.id);
  return res.status(200).json(userAds);
});

router.get('/all-ads', (req, res) => {
  return res.json(ads);
});

router.post('/ads', (req, res) => {
  const { token, area, bottles } = req.body;

  if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }

  const user = users.find(u => u.tokens.includes(token));
  if (!user) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (!area || !bottles) {
    return res.status(400).json({ message: 'Area and bottles are required' });
  }

  const newAd = {
    id: ads.length + 1,
    userid: user.id,
    area,
    bottles,
    phone: user.phone,
  };

  ads.push(newAd);
  return res.status(201).json({ message: 'Ad added successfully', ad: newAd });
});

router.delete('/ads/:id', (req, res) => {
  const { token } = req.body;
  const adId = Number(req.params.id);

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const user = users.find(u => u.tokens.includes(token));
  if (!user) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const adIndex = ads.findIndex(ad => ad.id === adId);
  if (adIndex === -1) {
    return res.status(404).json({ message: 'Ad not found' });
  }

  const ad = ads[adIndex];

  if (ad.userid !== user.id) {
    return res.status(403).json({ message: 'You do not have permission to delete this ad' });
  }

  ads.splice(adIndex, 1); 

  return res.json({ message: 'Ad deleted successfully' });
});

router.post('/logout', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  const user = users.find(u => u.tokens.includes(token));
  if (user) {
    user.tokens = user.tokens.filter(t => t !== token);
    return res.json({ message: 'Logged out successfully' });
  } else {
    return res.status(400).json({ message: 'Invalid token' });
  }
});



export default router;