import React from "react";
// import * as Pages from './pages';
import {Routes, Route} from 'react-router-dom';
import { Header, HeroCard, HeroForm, SearchWidget, HeroList} from './components';

import './App.css';

const App = () => {
    return (
      <>
        {/* <Header /> */}
        <SearchWidget />
        <HeroList />
        <HeroCard />
      </>
    )
};

export default App;
