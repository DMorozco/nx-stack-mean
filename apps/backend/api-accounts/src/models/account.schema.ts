import { Document, Model, Schema, model } from 'mongoose';
import { RoleType } from './account.model';

export interface IAccount extends Document {
  username: string;
  email: string;
  password: string;
  role: RoleType;
}

const AccountSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

export const Account: Model<IAccount & Document> = model<IAccount & Document>(
  'Account',
  AccountSchema
);
