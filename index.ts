import express from 'express';
const app = express();
app.use(express.json());

import namesRouter from './controllers/namesRouter';
app.use('/api', namesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});