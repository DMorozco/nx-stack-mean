import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { DatabaseConnectionHelper } from './helper/db.helper';
import { ProductService } from './product.service';

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/products', async (request, response) => {
  const resultProductList = await ProductService.getAll();
  response.json(resultProductList);
});

app.post('/api/products', async (request, response) => {
  const resultProductCreated = await ProductService.create(request.body);
  response.json(resultProductCreated);
});

app.delete('/api/products/:code', async (request, response) => {
  const resultProductIssDeleted = await ProductService.delete(request.params.code);
  response.json({isDeleted: resultProductIssDeleted});
});

app.put('/api/products/:code', async (request, response) => {
   const resultProductUpdated = await ProductService.update(request.params.code, request.body)
  response.json(resultProductUpdated);
});

const port = process.env.PORT || 3004;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/products`);
});
server.on('error', console.error);
DatabaseConnectionHelper.init();