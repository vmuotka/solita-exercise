import express from 'express';
import path from 'path';

const app = express();
app.use(express.json());

import namesRouter from './controllers/namesRouter';
app.use('/api', namesRouter);

const PORT = process.env.PORT || 3001;

// in production, serve the react-app build to client
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});