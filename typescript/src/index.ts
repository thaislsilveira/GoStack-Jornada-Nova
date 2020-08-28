import express, { response } from 'express';
import { helloWorld } from './routes';
const app = express();

app.get('/', (request, response) => {
  return response.json({ mensagem: 'Hello World' });
})

app.listen(3333);