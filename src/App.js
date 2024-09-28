import './App.scss';
import Header from './Components/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home.jsx"
import React, {useState, useEffect, createContext} from 'react';

const context2= createContext();
function App() {
  const [popular, setpopular] = useState([]);
    
  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'enter your API key here'
        }
      };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setpopular(response.results))
        // .then(()=>console.l  og(popular))
        .catch(err => console.error("The following error occured in fetching popular", err));
    }, [])
    
    return (
    <context2.Provider value= {popular}>

      <Router>
        <div className="App">

          <Header/>

          <Routes>
            <Route exact path='/' element= {<Home/>}></Route>
          </Routes>
        </div>
      </Router>
    </context2.Provider>
  );
}

export default App;
export {context2}