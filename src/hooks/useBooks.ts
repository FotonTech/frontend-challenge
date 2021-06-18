import axios from '../config/axios';
import { successObject, errorObject } from './utils';

// eslint-disable-next-line
export const useBooks = () => {
  const getAll = async () => {
    try {
      const response = await axios.get(`?q=all`);
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  const getByName = async (name: string) => {
    try {
      const response = await axios.get(`?q=${name}`);
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  const getOne = async (id: string) => {
    try {
      const response = await axios.get(id);
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  return { getAll, getByName, getOne };
};
