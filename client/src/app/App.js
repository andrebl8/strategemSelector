import React from 'react';
import StrategmContainer from '../components/StrategmContainer';
import SearchBar from '../components/searchBar/searchBar';
import '../style/main.scss';

function App() {
  return (
    <div className="App">
      <header className="item-header header">
        <h1 className="header-logo">Strategems</h1>
        <SearchBar />
      </header>¨

      <StrategmContainer />

    </div>
  );
}

export default App;
