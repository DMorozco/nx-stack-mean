import { model, Schema, Model, Document } from 'mongoose';

export interface IOrder extends Document {
  orderId: string;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  products: [
    {
      code: string;
      name: string;
      ingredients: [
        {
          code: string;
          name: string;
          price: number;
        }
      ];
      quantity: number;
      price: number;
      subtotal: number;
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
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  products: [
    {
      code: { type: String, required: true },
      name: { type: String, required: true },
      ingredients: [
        {
          code: { type: String, required: true },
          name: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      subtotal: { type: Number, required: true },
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
