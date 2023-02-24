import _ from 'lodash';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const find = (key: string): string | undefined => process.env[_.toUpper(key)];

export const get = (key: string): string => find(key) as string;
