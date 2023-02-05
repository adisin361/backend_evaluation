const companyService = require('../services/companyService');
const save = async (req, res) => {
  try {
    const body = req.body;
    const data = await companyService.fetchData(body);
    console.log(data);
    res.status(201).json(data.map((company) => { return { id: company.id, name: company.name, score: company.score }; }));
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const id = req.query.id;
    const body = req.body;
    const data = await companyService.updateCompanyDetails(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { save, updateCompany };