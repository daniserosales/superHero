import React from "react";
import * as Pages from '../src/pages';
import {Routes, Route} from 'react-router-dom';
import { Header } from './components';

const  App = () => {
  return (
    <Routes>
        <Route path="" element={<Header  />}>
          <Route index element={<Pages.Homepage />}/> 
          <Route path="/heroes" element={<Pages.AllPage  />} />
          <Route path="/heroes/:id" element={<Pages.HeroPage  />}/>
          {/* <Route path="*" element={<Pages.PageNotFound  />} /> */}
        </Route>
    </Routes>
  )
}

export default App;
