import React, { useState, useEffect } from 'react';
import './NameForm.css'

import NameTable from './NameTable'
import nameService from '../services/nameService'
import { NamesEntry } from '../types';

const NameForm: React.FC = () => {
  const [list, setList] = useState<Array<NamesEntry>>([]);
  const [query, setQuery] = useState<string>('');

  // fetch the full list from backend on load
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    nameService.getNames()
      .then(response => {
        setList(response.data)
      });
  };

  // makes an api call with the searchword from the input field
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nameService.find(query)
      .then(response => {
        setList(response.data);
      });
  };

  const resetForm = () => {
    setQuery('');
    getAll();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='search' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='type a name...' />
        <input type='button' onClick={resetForm} value='X' title='Reset filter' />
      </form>
      <NameTable data={list} />
    </>
  )
}

export default NameForm