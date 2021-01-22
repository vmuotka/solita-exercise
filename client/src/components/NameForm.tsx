import React, { useState, useEffect } from 'react';
import nameService from '../services/nameService'
import { NamesEntry } from '../types';
import './NameForm.css'

import NameTable from './NameTable'

const NameForm: React.FC = () => {
  const [list, setList] = useState<Array<NamesEntry>>([]);
  const [query, setQuery] = useState<string>('');

  // fetch the full list from backend on load
  useEffect(() => {
    nameService.getNames()
      .then(response => {
        setList(response.data)
      });
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nameService.find(query)
      .then(response => {
        setList(response.data);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='search' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='type a name...' />
      </form>
      <NameTable data={list} />
    </>
  )
}

export default NameForm