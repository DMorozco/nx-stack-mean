import { model, Schema, Model, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export const Contact: Model<IContact & Document> = model<IContact & Document>('Contact', ContactSchema);