import mongoose from 'mongoose';
import { get } from '../config/index';

export const connectionDb = async () => mongoose.connect(get('mongo_uri'));
