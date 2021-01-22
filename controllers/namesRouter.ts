import express from 'express';
import nameData from '../services/nameData';

const namesRouter = express.Router();

namesRouter.get('/getnames', (req, res) => {
  console.log('getting names');
  res.status(200).json(nameData.getNames());
});

namesRouter.get('/find/:query', (req, res) => {
  const query: string = req.params.query;
  res.status(200).json(nameData.getAmount(query));
});

export default namesRouter;