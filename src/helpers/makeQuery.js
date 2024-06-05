export const makeQueryString = (obj) => {
  let queryString = [];
  if (obj.equipment) {
    queryString.push(...obj.equipment);
  }
  if (obj.location) {
    queryString.push(`location=${obj.location}`);
  }
  if (obj.type) {
    queryString.push(`form=${obj.type}`);
  }
  return queryString.join('&');
};
