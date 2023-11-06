import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { DatabaseConnectionHelper } from './helper/db.helper';
import { AccountService } from './accounts.service';

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/accounts', async (request, response) => {
  const resultAccountList = await AccountService.getAll();
  response.status(resultAccountList.status).json(resultAccountList);
});

app.post('/api/accounts/signup', async (request, response) => {
  const resultAccountCreated = await AccountService.signup(request.body);
  response.status(resultAccountCreated.status).json(resultAccountCreated);
});

app.post('/api/accounts/login', async (request, response) => {
  const resultAccountCreated = await AccountService.login(request.body);
  response.status(resultAccountCreated.status).json(resultAccountCreated);
});

app.delete('/api/accounts/:email', async (request, response) => {
  const resultAccountIssDeleted = await AccountService.delete(request.params.email);
  response.json({isDeleted: resultAccountIssDeleted});
});

app.put('/api/accounts/:email', async (request, response) => {
   const resultAccountUpdated = await AccountService.update(request.params.email, request.body)
  response.status(resultAccountUpdated.status).json(resultAccountUpdated);
});

const port = process.env.PORT || 3002;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/accounts`);
});
server.on('error', console.error);
DatabaseConnectionHelper.init();