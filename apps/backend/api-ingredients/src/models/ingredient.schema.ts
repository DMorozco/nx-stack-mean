import { model, Schema, Model, Document } from 'mongoose';

export interface IIngredient extends Document {
    code: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

const IngredientSchema: Schema = new Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const Ingredient: Model<IIngredient & Document> = model<IIngredient & Document>('Ingredient', IngredientSchema);