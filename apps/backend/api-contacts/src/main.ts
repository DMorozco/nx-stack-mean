import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { DatabaseConnectionHelper } from './helper/db.helper';
import { ContactService } from './contact.service';

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/contacts', async (request, response) => {
  const resultContactList = await ContactService.getAll();
  response.json(resultContactList);
});

app.post('/api/contacts', async (request, response) => {
  const resultContactCreated = await ContactService.create(request.body);
  response.json(resultContactCreated);
});

const port = process.env.PORT || 3006;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/contacts`);
});
server.on('error', console.error);
DatabaseConnectionHelper.init();
