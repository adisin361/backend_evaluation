const companyController = require('../../src/controllers/companyController');
const companyService = require('../../src/services/companyService');
describe('Company Utils Test Cases', () => {
  it('Should return company depending upon its id', async () => {
    jest.spyOn(companyService, 'getCompanyById').mockResolvedValue([
      {
        id: 1
      }
    ]);

    const mockReq = {
      params: jest.fn()
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await companyController.getCompanyById(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(
      [
        {
          id: 1
        }
      ]
    );
  });
});