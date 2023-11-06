import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  lastname: string
  email: string;
  phone: string
  
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  
});

export const User: Model<IUser & Document> = model<IUser & Document>('User', UserSchema);