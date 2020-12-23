import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  id: { type: String, required: false },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  booking: { type: [String], required: false },
  favorites: { type: [String], required: false },
  admin: { type: Boolean, required: false },
});

export interface User extends mongoose.Document {
  id: string;
  username: string;
  email: string;
  password: string;
  booking: string[];
  favorites: string[];
  admin: boolean;
}
