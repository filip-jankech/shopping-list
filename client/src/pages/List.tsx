import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListParams, ListType } from '../types/types';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { getListById, getLists, updateList } from '../api/api';
import { Hint } from 'react-autocomplete-hint';

export const List = () => {
  const [text, setText] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);
  const [list, setList] = useState<ListType>();
  const [hintData, setHintData] = useState<string[]>([]);
  const params = useParams<ListParams>();
  const _id = params.listId;

  useEffect(() => {
    const fetchList = async () => {
      const res = await getListById(_id);
      if (res) {
        setItems(res.data.items);
        setList(res.data);
      } else {
        alert(`Seznam se nepodařilo načíst. Zkuste to prosím později.`);
      }
    }
    const prepareHintData = async () => {
      let hintData: string[] = [];
      const res = await getLists();
      res?.data.forEach((list: ListType) => {
        hintData = [...new Set([...hintData, ...list.items])];
      });
      setHintData(hintData);
    }
    fetchList();
    prepareHintData();
  }, [_id])

  const handleAddItem = () => {
    if (items.includes(text)) {
      return alert('Seznam již tuto položku obsahuje. Zadajte prosím jinou položku.');
    }
    setText('');
    const newItems = [...items, text];
    updateItems(newItems);
  }

  const handleDeleteItem = (itemToDelete: string) => {
    const filteredItems = items.filter((item: string) => item !== itemToDelete);
    updateItems(filteredItems);
  }

  const updateItems = async (updatedItems: string[]) => {
    const updatedList = list;
    if (!updatedList) return;
    updatedList.items = updatedItems;
    const res = await updateList(_id, updatedList);
    if (res) {
      setItems(res.data.items);
    } else {
      alert(`Při aktualizaci seznamu nastala chyba. Zkuste to prosím později.`);
    }
  }

  const renderList = () => {
    if (list) {
      return (
        <>
          <h1>Můj košík</h1>
          <BreadCrumbs currentTitle={`Položky seznamu "${list?.title}"`} />
          <h2>Položky seznamu</h2>
          <Hint options={hintData} allowTabFill>
            <input
              autoFocus
              type="text"
              placeholder='Zadejte novou položku'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Hint>
          <button className="button" onClick={handleAddItem}>Přidat</button>
          {items?.map((item: string) => {
            return (
              <div className="item" key={item}>
                <p>{item}</p>
                <i 
                  className="ri-delete-bin-7-fill"
                  onClick={() => handleDeleteItem(item)}
                ></i>
              </div>
            );
          })}
        </>
      )
    } else {
      <p>Seznam se nepodaťilo načíst. Zkuste to prosím později.</p>
    }
  }

  return (
    <>
      {renderList()}
    </>
  );
}
