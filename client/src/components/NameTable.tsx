import React, { useState, useEffect } from 'react';
import { NamesEntry } from '../types';

interface TableProps {
  data: Array<NamesEntry>
}

type SortType = 'alphabetical' | 'amount';


const sortAlphabetically = (a: NamesEntry, b: NamesEntry): number => {
  if (a.name > b.name)
    return 1;
  if (a.name < b.name)
    return -1;

  return 0;
};


const sortByAmount = (a: NamesEntry, b: NamesEntry): number => {
  if (a.amount > b.amount)
    return -1;
  if (a.amount < b.amount)
    return 1;

  return 0;
};

const amountReducer = (a: number, b: NamesEntry): number => {
  return a + b.amount
};

const NameTable: React.FC<TableProps> = ({ data }) => {
  const [list, setList] = useState<Array<NamesEntry>>([]);

  // when the components data-prop changes, reset the list
  useEffect(() => {
    setList(data);
  }, [data]);

  const sortList = (sortBy: SortType) => {
    const listCopy = [...list];
    if (sortBy === 'amount')
      listCopy.sort(sortByAmount);
    else
      listCopy.sort(sortAlphabetically)

    setList(listCopy);
  }

  const getTotalAmount = () => {
    return list.reduce(amountReducer, 0);
  }


  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortList('alphabetical')}>Name</th>
            <th onClick={() => sortList('amount')}>Amount ({getTotalAmount()})</th>
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
  );
};

export default NameTable