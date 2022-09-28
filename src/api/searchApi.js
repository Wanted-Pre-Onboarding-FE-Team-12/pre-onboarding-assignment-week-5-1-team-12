import { instance } from '.';

export const getSearchList = async keyword => {
  console.info('calling api');
  const response = await instance.get(`/sick?sickNm_like=${keyword}`);
  return response;
};
