import axios, { AxiosResponse } from 'axios';
import { ListType } from '../types/types';

const addList = async (text: string): Promise<AxiosResponse | undefined> => {
  const newList = {
    title: text,
    items: [],
  }
  try {
    return axios.post("http://localhost:5000/save-list", { newList });
  } catch(e) {
    console.log(e);
  }
}

const getLists = async (): Promise<AxiosResponse | undefined> => {
  try {
    return axios.get("http://localhost:5000/get-lists");
  } catch(e) {
    console.log(e);
  }
}

const getListById = async (_id: string): Promise<AxiosResponse | undefined> => {
  try {
    return axios.get("http://localhost:5000/get-list", { params: { _id } });
  } catch(e) {
    console.log(e);
  }
}

const updateList = async (_id: string, updatedList: ListType): Promise<AxiosResponse | undefined> => {
  try {
    return axios.post("http://localhost:5000/update-list", { _id, list: updatedList });
  } catch(e) {
    console.log(e);
  }
}

const deleteList = async (_id: string): Promise<AxiosResponse | undefined> => {
  try {
    return axios.post("http://localhost:5000/delete-list", { _id });
  } catch(e) {
    console.log(e);
  }
}

export { addList, getLists, getListById, updateList, deleteList }