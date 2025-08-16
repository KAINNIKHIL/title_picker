import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import { Profile } from './models/index.js';

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: "*",   
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.post('/profiles', async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('LinkedIn Scraper running... use /profiles');
});

app.get('/profiles', async (req, res) => {
  const profiles = await Profile.findAll();
  res.json(profiles);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
