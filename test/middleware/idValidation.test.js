const idValidation = require('../../src/middleware/idValidation');

describe('idValidation', () => {
  it('Should give success message', () => {
    const mockReq = {
      query: {
        id: '123abc456'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const mockNext = jest.fn();
    idValidation(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  it('Should give error message', () => {
    const req = {
      query: {
        id: ''
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    idValidation(req, res, next);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      message: '"id" is not allowed to be empty'
    });
  });
});