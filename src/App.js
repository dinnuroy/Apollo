import React from "react";
import "./App.css";
import {AppTable} from './Apptable';
import {Topbar} from "./Topbar";
import {Footer} from "./Footer";
import {Search} from "./Search";


const App = () => {
  return(
    <div className='App'>
      <Topbar></Topbar>
      <Search></Search>
      <AppTable></AppTable>
      <Footer></Footer>
    </div>
  )
};

export default App;
