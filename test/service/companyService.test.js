const companyService = require('../../src/services/companyService');
const { companies } = require('../../database/models');
// const { sectors } = require('../../database/models');
describe('Company Service Test Cases', () => {
  it('Should return updated company', async () => {
    const id = '95b5a067-808a-44a9-a490-b4ef8a045f61';
    const body = {
      ceo: 'ceo',
      address: 'address'
    };
    jest.spyOn(companies, 'findOne').mockResolvedValue({
      data: {
        id,
        name: 'Volkswagen',
        ceo: 'Mr. Marie Sipes',
        address: '',
        score: '18.92',
      }
    });
    jest.spyOn(companies, 'update').mockResolvedValue([1]);
    jest.spyOn(companies, 'findAll').mockResolvedValue({
      address: null,
      ceo: 'Grady Smitham',
      createdAt: '2023-02-05T19:23:03.975Z',
      description: null,
      id: '95b5a067-808a-44a9-a490-b4ef8a045f61',
      name: 'Volkswagen',
      score: '15.784075000000001',
      sector_id: 61,
      updatedAt: '2023-02-05T19:23:04.489Z',
    });
    const updatedCompany = await companyService.updateCompanyDetails(id, body);
    expect(updatedCompany).toEqual({
      address: null,
      ceo: 'Grady Smitham',
      createdAt: '2023-02-05T19:23:03.975Z',
      description: null,
      id: '95b5a067-808a-44a9-a490-b4ef8a045f61',
      name: 'Volkswagen',
      score: '15.784075000000001',
      sector_id: 61,
      updatedAt: '2023-02-05T19:23:04.489Z',
    });
  });

  it('Should return empty object when company not present and update method called', async () => {
    const id = '95b5a067-808a-44a9-a490-b4ef8a045f61';
    const body = {
      ceo: 'ceo',
      address: 'address'
    };
    jest.spyOn(companies, 'findOne').mockResolvedValue(null);
    const updatedCompany = await companyService.updateCompanyDetails(id, body);
    expect(updatedCompany).toEqual({});
  });
});