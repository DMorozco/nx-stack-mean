import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  lastname: string;
  address: string;
  city: string;
  phone: number;
  email:string;
  
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true }, 
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: Number,required: true },
  email:  { type: String, required: true },
 
  
});

export const User: Model<IUser & Document> = model<IUser & Document>('User', UserSchema);