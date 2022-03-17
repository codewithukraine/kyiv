const fs = require('fs');
const path = require('path');

const dataFileName = 'data.json';

readDataFile = () => {
  var jsonPath = path.join(__dirname, dataFileName);
  var jsonString = fs.readFileSync(jsonPath, 'utf8');
  return JSON.parse(jsonString);
};

filterByLocation = (data, location) => {
  return data.filter((item) => item.location.includes(location));
};

filterByKeyword = (data, keyword) => {
  return data.filter((item) => item.keywords.includes(keyword));
};

getAll = () => {
  const dataSet = readDataFile();
  return dataSet;
};

getServices = () => {
  const data = getAll();
  const topics = [...new Set(data.flatMap((item) => item.keywords))];
  return topics;
};

getByQueryParams = (queryParams) => {
  const { location, keyword } = queryParams;
  const dataSet = readDataFile();

  let filteredData = dataSet;

  if (location) filteredData = filterByLocation(filteredData, location);
  if (keyword) filteredData = filterByKeyword(filteredData, keyword);

  return filteredData;
};

module.exports = {
  getAll,
  getResultsByQueryParams,
  getAllServices,
};
