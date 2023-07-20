import React from "react";
import * as Pages from '../src/pages';
import {Routes, Route} from 'react-router-dom';
// import { Header } from './components';
import "./app.css"


const  App = () => {
  console.log("banana")
  return (
    <html>
     <Routes>
        {/* <Route path="" element={<Header  />}> */}
          <Route path="/" element={<Pages.Homepage />}></Route>
          {/* <Route path="/heroes" element={<Pages.AllPage  />} /> */}
          {/* <Route path="/heroes/:id" element={<Pages.HeroPage  />}/> */}
          {/* <Route path="*" element={<Pages.PageNotFound  />} /> */}
        {/* </Route> */}
     </Routes>
    </html>
  )
}

export default App;
