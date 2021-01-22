import React from 'react';
import './App.css';

// project components
import NameForm from './components/NameForm'

const App: React.FC = () => {
  return (
    <>
      <h1>Solita database</h1>
      <NameForm />
    </>
  )
}

export default App;
