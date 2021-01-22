import React, { useState, useEffect } from 'react';
import nameService from '../services/nameService'
import { NamesEntry } from '../types';

const NameTable: React.FC = () => {
  const [list, setList] = useState<Array<NamesEntry>>([]);
  const [query, setQuery] = useState<string>('');

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
        <input type='query' value={query} onChange={(e) => setQuery(e.target.value)} />
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item, i) =>
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default NameTable