import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { DatabaseConnectionHelper } from './helper/db.helper';
import { IngredientService } from './ingredient.service';

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/ingredients', async (request, response) => {
  const resultIngredientList = await IngredientService.getAll();
  response.json(resultIngredientList);
});

app.post('/api/ingredients', async (request, response) => {
  const resultIngredientCreated = await IngredientService.create(request.body);
  response.json(resultIngredientCreated);
});

app.delete('/api/ingredients/:code', async (request, response) => {
  const resultIngredientIssDeleted = await IngredientService.delete(request.params.code);
  response.json({isDeleted: resultIngredientIssDeleted});
});

app.put('/api/ingredients/:code', async (request, response) => {
   const resultIngredientUpdated = await IngredientService.update(request.params.code, request.body)
  response.json(resultIngredientUpdated);
});

const port = process.env.PORT || 3008;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/ingredients`);
});
server.on('error', console.error);
DatabaseConnectionHelper.init();
