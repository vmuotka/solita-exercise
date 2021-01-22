import React from 'react';
import './App.css';

// project components
import NameForm from './components/NameForm'

const App: React.FC = () => {
  return (
    <div className='app'>
      <div>
        <h1>Solita database</h1>
        <p>
          This database contains the top-10 male and female names in Solita. The application can be used to filter and sort the data.
          The application contains both frontend and backend. The source code can be found <a href='https://github.com/vmuotka/solita-exercise' rel='noopener'>in github.</a>
        </p>
        <p>
          Creator: Vili Muotka.
        </p>
        <NameForm />
      </div>
    </div>
  )
}

export default App;
