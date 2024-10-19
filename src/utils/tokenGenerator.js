// utils/tokenGenerator.js
import { v4 as uuidv4 } from 'uuid';

export const generateUniqueToken = () => {
  return uuidv4();
};