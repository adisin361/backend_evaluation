const companyController = require('../../src/controllers/companyController');
const companyService = require('../../src/services/companyService');

describe('Company Utils Test Cases', () => {
  it('Should return company depending upon its id', async () => {
    jest.spyOn(companyService, 'save').mockResolvedValue([
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

  it('Should return error', async () => {
    jest.spyOn(companyService, 'save').mockRejectedValue(new Error('Internal Server error!!'));

    const mockReq = {};

    const mockRes = {

      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await companyController.save(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({
      error: 'Internal Server error!!'
    });
  });
});