const { companies, sectors } = require('../../database/models');
const utils = require('../../src/utils');
const { getCompanyUrl, getSectorUrl } = require('../helper');

const axios = require('axios');
const fetchData = async ({ urlLink }) => {
  const csv = await axios.get(urlLink);
  const lines = utils.readData(csv);

  lines.forEach(async (line, index) => {
    if (index === 0) {
      return;
    }
    const data = utils.splitString(line);
    const companyData = await axios.get(`${getCompanyUrl}${data[0]}`);
    const company = {
      id: companyData.data.id,
      name: companyData.data.name,
      ceo: companyData.data.ceo
    };
    await companies.create(company);
  });

  lines.forEach(async (line, index) => {
    if (index === 0)
      return;
    const data = utils.splitString(line);
    const sectorData = await axios.get(`${getSectorUrl}${data[1]}`);
    const sector = {
      name: data[1],
    };

    const newSector = await sectors.create(sector);
    console.log(newSector);
    sectorData.data.forEach(async (secData) => {
      const score = ((Number(secData.performanceIndex[0].value) * 10) + (Number(secData.performanceIndex[1].value) / 10000) + (Number(secData.performanceIndex[2].value) * 10) + Number(secData.performanceIndex[3].value)) / 4;

      await companies.update({ sector_id: newSector.id, score: `${score}` }, {
        where: {
          id: secData.companyId,
        }
      });
    });
  });

  return companies.findAll();
};

const updateCompanyDetails = async (id, body) => {
  const company = await companies.findOne({ where: { id: id } });
  if (!company)
    return {};
  const ceo = body.ceo ? body.ceo : company.data.ceo;
  const address = body.address ? body.address : company.data.address;


  companies.update({ ceo: ceo, address: address }, { where: { id: id } });
  return companies.findAll({ where: { id: id } });
};

module.exports = {
  fetchData,
  updateCompanyDetails
};
