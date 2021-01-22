import React from 'react';
import './App.css';

// project components
import NameTable from './components/NameTable'

const App: React.FC = () => {
  return (
    <>
      <h1>Solita database</h1>
      <NameTable />
    </>
  )
}

export default App;
