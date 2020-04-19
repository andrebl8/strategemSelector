import React from 'react';
import Test from '../components/test';
import '../style/main.scss';
import SearchBar from '../components/searchBar/searchBar';

function App() {
  return (
    <div className="App">
      <header className="item-header header">
        <h1 className="header-logo">Strategems</h1>
        <SearchBar />
      </header>
      <Test />
      

    </div>
  );
}

export default App;
