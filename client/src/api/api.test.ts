import { addList, getLists, getListById, updateList, deleteList } from './api';
import axios, { AxiosResponse } from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const listMock = {
  _id: '123456',
  title: 'Test list',
  items: ['apples', 'milk', 'bread'],
}

describe('api', () => {
  beforeEach(() => {
    const mockedPostResponse: AxiosResponse = {
      data: 'Succesfull operation',
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    mockedAxios.post.mockResolvedValueOnce(mockedPostResponse);
  });

  describe('getLists', () => {
    it('should fetch and return all shopping lists', async () => {
      const mockedGetResponse: AxiosResponse = {
        data: [listMock, listMock],
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };
      mockedAxios.get.mockResolvedValueOnce(mockedGetResponse);
      const response = await getLists();
      expect(response?.data).toEqual([listMock, listMock]);
    });
  });
  
  describe('getListById', () => {
    it('should fetch and return specific shopping list', async () => {
      const mockedGetResponse: AxiosResponse = {
        data: listMock,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };
      mockedAxios.get.mockResolvedValueOnce(mockedGetResponse);
      const response = await getListById('123456');
      expect(response?.data).toEqual(listMock);
    });
  });
  
  describe('addList', () => {
    it('should create new shopping list', async () => {
      const response = await addList('New List');
      expect(response?.status).toEqual(200);
    });
  });
  
  describe('updateList', () => {
    it('should update given list and return updated shopping list', async () => {
      const response = await updateList('123456', listMock);
      expect(response?.status).toEqual(200);
    });
  });
  
  describe('deleteList', () => {
    it('should delete given shopping list', async () => {
      const response = await deleteList('123456');
      expect(response?.status).toEqual(200);
    });
  });
});
