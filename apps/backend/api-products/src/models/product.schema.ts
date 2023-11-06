import { model, Schema, Model, Document } from 'mongoose';

export interface IProduct extends Document {
    code: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    url: string;
}

const ProductSchema: Schema = new Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  url: { type: String, required: true },
});

export const Product: Model<IProduct & Document> = model<IProduct & Document>('Product', ProductSchema);