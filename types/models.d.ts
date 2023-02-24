import { Schema } from 'joi';

export type Config = Readonly<{
  port?: string;
  mongodb: {
    uri?: string;
    ssl?: string;
  };
}>;
