import express from 'express';
import cors from 'cors';

const app = express();

// TO BE DISCUSSED WHAT TO DO

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'OK' });
});

export default app;