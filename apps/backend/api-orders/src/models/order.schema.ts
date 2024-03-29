import { model, Schema, Model, Document } from 'mongoose';

export interface IOrder extends Document {
  orderId: string;
  customer: {
    name: string;
    lastname: string;
    address: string;
    city: string;
    phone: number;
    email: string;
  };
  products: [
    {
      code: number;
      img: string;
      name: string;
      quantity: number;
      price: number;
      flavours: string[];
      size: number;
      toppings?: {
        code: number;
        name: string;
        price: number;
      }[];
    }
  ];
  createDate: Date;
  total: number;
  status: 'created' | 'delivered' | 'cancelled';
}

const OrderSchema: Schema = new Schema({
  orderId: { type: String, required: true, unique: true },
  customer: {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
  },
  products: [
    {
      code: { type: String, required: true },
      name: { type: String, required: true },
      img: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      size: { type: Number, required: true },
      flavours: [{ type: String, required: true }],
      toppings: [
        {
          code: { type: String, required: true },
          name: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  ],
  createDate: { type: Date, required: true },
  total: { type: Number, required: true },
  status: { type: String, required: true },
});

export const Order: Model<IOrder & Document> = model<IOrder & Document>(
  'Order',
  OrderSchema
);
