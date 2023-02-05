const companyController = require('../../src/controllers/companyController');
const companyService = require('../../src/services/companyService');

describe('Company controller test cases', () => {
  it('Should return company depending upon its id', async () => {
    jest.spyOn(companyService, 'fetchData').mockResolvedValue([
      {
        id: '24ca0568-d946-4c14-a0d7-eb81295b7a9e',
        name: 'D-Mart',
        score: 19.569474999999997
      }
    ]);
    const mockReq = {
      params: jest.fn()
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await companyController.save(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith(
      [
        {
          id: '24ca0568-d946-4c14-a0d7-eb81295b7a9e',
          name: 'D-Mart',
          score: 19.569474999999997
        }
      ]
    );
  });


  it('Should return error', async () => {
    jest.spyOn(companyService, 'fetchData').mockRejectedValue(new Error('Internal Server error!!'));

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

  it('should return updated company details of the given id', async () => {
    jest.spyOn(companyService, 'updateCompanyDetails').mockResolvedValue([
      {
        id: 'c144e397-bef9-4aa1-aef4-842f4da44f9c',
        name: 'Ebay',
        ceo: 'Randall Pagac',
      }
    ]
    );

    const mockReq = {
      id: jest.fn(),
      body: jest.fn(),
      query: jest.fn()
    };

    const mockRes = {

      status: jest.fn().mockReturnThis(),
      json: jest.fn()

    };
    await companyController.updateCompany(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(
      [
        {
          id: 'c144e397-bef9-4aa1-aef4-842f4da44f9c',
          name: 'Ebay',
          ceo: 'Randall Pagac',
        }
      ]
    );
  });
  it('should return error', async () => {
    jest.spyOn(companyService, 'updateCompanyDetails').mockRejectedValue(new Error('Cannot read properties of undefined (reading \'id\')'));

    const mockReq = {
      id: jest.fn(),
      body: jest.fn()
    };

    const mockRes = {

      status: jest.fn().mockReturnThis(),
      json: jest.fn()

    };
    await companyController.updateCompany(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({
      error: 'Cannot read properties of undefined (reading \'id\')'
    });
  });
});