import React from 'react';
import StrategmContainer from '../components/StrategmContainer';
import SearchBar from '../components/searchBar/searchBar';
import '../style/main.scss';
import { TagProvider } from '../context/tagContext';

function App() {
  return (
    <div className="App">
      <TagProvider>
      <header className="item-header header">
        <h1 className="header-logo">Strategems</h1>
        <SearchBar />
      </header>¨

      <StrategmContainer />
      </TagProvider>
    </div>
  );
}

export default App;
