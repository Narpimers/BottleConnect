import express from 'express';
import cors from 'cors';
import authRoutes from './authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));

app.use('/api', authRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});