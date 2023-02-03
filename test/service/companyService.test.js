const companyService = require('../../src/services/companyService');
const { companies } = require('../../database/models');
// const { sectors } = require('../../database/models');
describe('Company Service Test Cases', () => {
  it('Should return company depending upon its id', async () => {
    jest.spyOn(companies, 'findOne').mockResolvedValue([
      {
        id: 1
      }
    ]);
    const company = await companyService.getCompanyById(1);
    expect(company).toEqual([
      {
        id: 1
      }
    ]);
  });
});