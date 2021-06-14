import axios from '../config/axios';
import { successObject, errorObject } from './utils';

const endpoint = '?q=all';

// eslint-disable-next-line
export const useBooks = () => {
  const getAll = async () => {
    try {
      const response = await axios.get(`${endpoint}`);
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  return { getAll };
};
