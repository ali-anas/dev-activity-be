const data = require('./dev-activity-data.json');

const getDevelopersData = (req, res) => {
  return res.status(200).json(data);
}

module.exports = { 
  getDevelopersData,
}