const validateBody = require('../../src/middleware/validateBody');

describe('validateBody', () => {
  it('Should give success message', () => {
    const mockReq = {
      body: {
        urlLink: 'https://www.google.com'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const mockNext = jest.fn();
    validateBody(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  it('Should give error message', () => {
    const req = {
      body: {
        urlLink: ''
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    validateBody(req, res, next);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      message: '"urlLink" is not allowed to be empty'
    });
  });
});

