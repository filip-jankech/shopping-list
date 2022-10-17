import React from 'react';
import { useState, useEffect } from 'react';
import { ListItem } from '../components/ListItem'
import { ListType } from '../types/types';
import { deleteList, getLists } from '../api/api';

export const Home = () => {
  const [lists, setLists] = useState<ListType[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      const res = await getLists();
      if (res) {
        setLists(res.data)
      } else {
        alert(`Seznamy se nepodařilo načíst. Zkuste to prosím později.`);
      }
    }
    fetchLists();
  }, [])

  const handleDeleteList = async (_id: string) => {
    const res = await deleteList(_id);
    if (res) {
      const filteredLists = lists.filter((list: ListType) => list._id !== _id);
      setLists(filteredLists);
    } else {
      alert(`Při mazání seznamu nastala chyba. Zkuste to prosím později.`);
    }
  }

  return (
    <>
      <h1>Můj košík</h1>
      <h2>Nákupní seznamy</h2>
      <a className="button" href="/add">Vytvořit</a>
      <div className="lists">
        {lists.map((list: ListType) => <ListItem
          key={list._id}
          id={list._id}
          title={list.title}
          remove={() => handleDeleteList(list._id)} /> 
        )} 
      </div>
    </>
  );
}
