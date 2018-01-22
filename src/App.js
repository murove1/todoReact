import React from 'react';

import './App.css';
import ListContainer from './containers/ListContainer';
import HeaderContainer from './containers/HeaderContainer';
import FormContainer from './containers/FormContainer';
import FilterContainer from './containers/FilterContainer';

const App = () => {
  return (
    <main className="main">
      <HeaderContainer />
      <FilterContainer />
      <ListContainer />
      <FormContainer />
    </main>
  );
};

export default App;
