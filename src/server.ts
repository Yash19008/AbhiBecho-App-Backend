import app from './app';
import { config } from 'dotenv';

config();

// FURTHER UPDATES REQIURED

// 70% MVP ALREADY COMPLETED

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});