import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  email:string
  name: string;
  lastname: string;
  city: string;
  address: string;
  phone: number;
  
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true }, 
  lastname: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number,required: true },
 
  
});

export const User: Model<IUser & Document> = model<IUser & Document>('User', UserSchema);