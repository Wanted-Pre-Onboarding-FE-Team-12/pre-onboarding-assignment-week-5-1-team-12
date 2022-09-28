import { instance } from '.';

export const getSearchList = async keyword => {
  const response = await instance.get(`sick?sickNm_like=${keyword}`);
  return response;
};
