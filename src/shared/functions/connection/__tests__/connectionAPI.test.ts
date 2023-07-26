import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { URL_CART } from '../../../constants/urls';
import ConnectionAPI, {
  connectionAPIDelete,
  connectionAPIGet,
  connectionAPIPacth,
  connectionAPIPost,
  connectionAPIPut,
} from '../connectionAPI';
import { MethodEnum } from '../../../../enums/methods.enum';
import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../../constants/errosContants';

const mockAxios = new MockAdapter(axios);
const token = 'token_mock';
const mockReturnValue = 'mockReturnValue';
const BODY_MOCK = { name: 'test' };

jest.mock('../auth', () => ({
  getAuthorizationToken: () => token,
}));

describe('ConnectionAPI', () => {
  describe('connectionAPIGet', () => {
    it('should success get', async () => {
      const spyAxios = jest.spyOn(axios, 'get');
      mockAxios.onGet(URL_CART).reply(200, mockReturnValue);

      const returnGet = await connectionAPIGet(URL_CART);

      expect(returnGet).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
    });
  });

  describe('connectionAPIDelete', () => {
    it('should success delete', async () => {
      const spyAxios = jest.spyOn(axios, 'delete');
      mockAxios.onDelete(URL_CART).reply(200, mockReturnValue);

      const returnDelete = await connectionAPIDelete(URL_CART);

      expect(returnDelete).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
    });
  });

  describe('connectionAPIPost', () => {
    it('should success post', async () => {
      const spyAxios = jest.spyOn(axios, 'post');
      mockAxios.onPost(URL_CART).reply(200, mockReturnValue);

      const returnPost = await connectionAPIPost(URL_CART, BODY_MOCK);

      expect(returnPost).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connectionAPIPut', () => {
    it('should success put', async () => {
      const spyAxios = jest.spyOn(axios, 'put');
      mockAxios.onPut(URL_CART).reply(200, mockReturnValue);

      const returnPut = await connectionAPIPut(URL_CART, BODY_MOCK);

      expect(returnPut).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connectionAPIPacth', () => {
    it('should success patch', async () => {
      const spyAxios = jest.spyOn(axios, 'patch');
      mockAxios.onPatch(URL_CART).reply(200, mockReturnValue);

      const returnPatch = await connectionAPIPacth(URL_CART, BODY_MOCK);

      expect(returnPatch).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connect', () => {
    it('should return success', async () => {
      mockAxios.onGet(URL_CART).reply(200, mockReturnValue);

      const returnGet = await ConnectionAPI.connect(URL_CART, MethodEnum.GET);

      expect(returnGet).toEqual(mockReturnValue);
    });

    it('should return error 401', async () => {
      mockAxios.onGet(URL_CART).reply(401);

      // eslint-disable-next-line jest/valid-expect
      expect(ConnectionAPI.connect(URL_CART, MethodEnum.GET)).rejects.toThrowError(
        Error(ERROR_ACCESS_DANIED)
      );
    });

    it('should return error 403', async () => {
      mockAxios.onGet(URL_CART).reply(403);

      // eslint-disable-next-line jest/valid-expect
      expect(ConnectionAPI.connect(URL_CART, MethodEnum.GET)).rejects.toThrowError(
        Error(ERROR_ACCESS_DANIED)
      );
    });

    it('should return error 400', async () => {
      mockAxios.onGet(URL_CART).reply(400);

      // eslint-disable-next-line jest/valid-expect
      expect(ConnectionAPI.connect(URL_CART, MethodEnum.GET)).rejects.toThrowError(
        Error(ERROR_CONNECTION)
      );
    });
  });
});
