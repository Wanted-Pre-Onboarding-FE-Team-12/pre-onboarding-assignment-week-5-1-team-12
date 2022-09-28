export const makeBold = (value, keyword) => {
  let re = new RegExp(keyword, 'g');

  return value.replace(re, '<strong>' + keyword + '</strong>');
};
