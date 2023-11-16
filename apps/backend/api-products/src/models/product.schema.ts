import { model, Schema, Model, Document } from 'mongoose';

export interface IProduct extends Document {
  id: number;
  img: string;
  name: string;
  shortdesc: string;
  price: number;
  rating: number;
  category: number[];
  sizes: [];
  sku: string;
  tags: number[];
  attributes: [];
  longdescription: string;
  reviews: [];
}

const ProductSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  img: { type: String, required: true },
  name: { type: String, required: true },
  shortdesc: { type: String, required: true },
  price: { type: Number, required: true },
  reating: { type: Number, required: true },
  category: { type: Number, required: true },
  sizes: { type: Number, required: true },
  sku: { type: String, required: true },
  tags: { type: Number, required: true },
  attributes: { type: String, required: true },
  longdescription: { type: String, required: true },
  reviews: { type: String, required: true },

});

export const Product: Model<IProduct & Document> = model<IProduct & Document>('Product', ProductSchema);