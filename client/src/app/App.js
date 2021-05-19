import React from 'react';
import StrategmContainer from '../components/StrategmContainer';
import '../style/main.scss';
import SearchBar from '../components/searchBar/searchBar';

function App() {
  return (
    <div className="App">
      <header className="item-header header">
        <h1 className="header-logo">Strategems</h1>
        <SearchBar />
      </header>
      <StrategmContainer />
      

    </div>
  );
}

export default App;
