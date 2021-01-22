import axios, { AxiosResponse } from 'axios';

const getNames = async (): Promise<AxiosResponse> => {
  return await axios.get('/api/getnames');
}

const find = async (query: string): Promise<AxiosResponse> => {
  // if the search query is empty, get the full list
  if (query)
    return await axios.get(`/api/find/${query}`);
  else
    return getNames();
}

export default {
  getNames,
  find,
}