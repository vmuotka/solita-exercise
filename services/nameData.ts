import namesData from '../data/names.json';
import { NamesEntry } from '../types';

const getNames = (): Array<NamesEntry> => {
  return namesData.names.sort(sortAlphabetically);
};

const getAmount = (query: string): Array<NamesEntry> => {
  // to get the amount for spesific name, 
  const names: Array<NamesEntry> =
    namesData.names.filter(obj => obj.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  return names.sort(sortAlphabetically);
};

const sortAlphabetically = (a: NamesEntry, b: NamesEntry): number => {
  if (a.name > b.name)
    return 1;
  if (a.name < b.name)
    return -1;

  return 0;
};

export default {
  getNames,
  getAmount
};