import React from 'react';
import './App.css';
import {BrowserRouter,Router,Route} from react-router-dom;
import HomePage from './Components/Common/Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<HomePage.js/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
