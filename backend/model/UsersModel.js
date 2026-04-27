import { model } from 'mongoose';
import { UsersSchema } from '../schemas/UsersSchema.js';

const User = model('user', UsersSchema);

export { User };