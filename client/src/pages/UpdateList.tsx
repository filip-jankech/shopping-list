import React, { useEffect, useState } from 'react';
import { useParams, useHistory, RouterChildContext } from 'react-router-dom';
import { BreadCrumbs } from '../components/BreadCrumbs';
import axios from "axios";
import { ListParams, ListType } from '../types/types';
import { deleteList, updateList } from '../api/api';

export const UpdateList = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useState<ListType>();
  const params = useParams<ListParams>();
  const _id = params.listId;
  const history = useHistory<RouterChildContext['router']['history']>();

  useEffect(() => {
    axios.get("http://localhost:5000/get-list", { params: { _id } })
      .then((res) => {
        setList(res.data);
        setText(res.data.title);
      })
      .catch((err) => {
        alert('Seznamu se nepovedlo načíst. Zkuste to prosím později.');
      });
  }, [_id])

  const handleUpdateList = async () => {
    const updatedList = list;
    if (!updatedList) return;
    updatedList.title = text;
    const res = await updateList(_id, updatedList);
    if (res) {
      history.push('/');
    } else {
      alert(`Při aktualizaci seznamu nastala chyba. Zkuste to prosím později.`);
    }
  }

  const handleDeleteList = async () => {
    const res = await deleteList(_id);
    if (res) {
      history.push("/");
    } else {
      alert(`Při mazání seznamu nastala chyba. Zkuste to prosím později.`);
    }
  }

  const renderUpdateList = () => {
    if (list) {
      return (
        <>
          <h1>Můj košík</h1>
          <BreadCrumbs currentTitle={`Úprava "${list?.title}"`} />
          <h2>Úprava seznamu</h2>
          <input
            autoFocus
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} 
          />
          <button className="button" onClick={handleUpdateList}>Upravit</button>
          <button className="button" onClick={handleDeleteList}>Smazat</button>
        </>
      )
    } else {
      <p>Seznam se nepodaťilo načíst. Zkuste to prosím později.</p>
    }
  }
  
  return (
    <>
      {renderUpdateList()}
    </>
  );
}
