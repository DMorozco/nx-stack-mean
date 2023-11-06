import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { DatabaseConnectionHelper } from './helper/db.helper';
import { UserService } from './user.service';

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/users', async (request, response) => {
  const resultUserList = await UserService.getAll();
  response.json(resultUserList);
});

app.get('/api/users/:email', async (request, response) => {
  const resultUser = await UserService.getById(request.params.email);
  response.json(resultUser);
});

app.post('/api/users', async (request, response) => {
  const resultUserCreated = await UserService.create(request.body);
  response.json(resultUserCreated);
});

app.delete('/api/users', async (request, response) => {
  const email = request.query.email as string;
  const resultUserIssDeleted = await UserService.delete(email);
  response.json({isDeleted: resultUserIssDeleted});
});

app.put('/api/users', async (request, response) => {
  const email = request.query.email as string;
  const resultUserUpdated = await UserService.update(email, request.body)
  response.json(resultUserUpdated);
});

const port = process.env.PORT || 3005;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/users`);
});
server.on('error', console.error);
DatabaseConnectionHelper.init();