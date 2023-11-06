import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { DatabaseConnectionHelper } from './helper/db.helper';
import { OrderService } from './order.service';

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/orders', async (request, response) => {
  const resultOrderList = await OrderService.getAll();
  response.json(resultOrderList);
});

app.post('/api/orders', async (request, response) => {
  const resultOrderCreated = await OrderService.create(request.body);
  response.json(resultOrderCreated);
});

app.put('/api/orders/:orderId', async (request, response) => {
   const resultOrderUpdated = await OrderService.update(request.params.orderId, request.body)
  response.json(resultOrderUpdated);
});

app.patch('/api/orders/:orderId/deliver', async (request, response) => {
  const resultOrderUpdated = await OrderService.deliver(request.params.orderId)
 response.json(resultOrderUpdated);
});

app.patch('/api/orders/:orderId/cancel', async (request, response) => {
  const resultOrderUpdated = await OrderService.cancel(request.params.orderId)
 response.json(resultOrderUpdated);
});

const port = process.env.PORT || 3007;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/orders`);
});
server.on('error', console.error);
DatabaseConnectionHelper.init();
