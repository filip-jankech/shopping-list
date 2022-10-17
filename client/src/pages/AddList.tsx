import React, { useState } from 'react';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { useHistory, RouterChildContext } from 'react-router-dom';
import { addList, getLists } from '../api/api';
import { ListType } from '../types/types';

export const AddList = () => {
  const [text, setText] = useState<string>('');
  const history = useHistory<RouterChildContext['router']['history']>();

  const handleOnClick = async () => {
    const getListsResponse = await getLists();
    const listNames = getListsResponse?.data.map((list: ListType) => list.title);
    if (listNames.includes(text)) {
      return alert(`Seznam s daným jménem již existuje. Zadejte jiné jméno.`);
    }
    const addListResponse = await addList(text);
    if (addListResponse) {
      history.push('/');
    } else {
      alert(`Při vytváření seznamu nastala chyba. Zkuste to prosím později.`);
    }
  }
  
  return (
    <>
      <h1>Můj košík</h1>
      <BreadCrumbs currentTitle="Vytvoření nového seznamu" />
      <h2>Vytvoření nového seznamu</h2>
      <input
        autoFocus
        type="text"
        placeholder='Název novýho seznamu'
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <button 
        className="button"
        onClick={handleOnClick}
      >
        Vytvořit
      </button>
    </>
  );
}
