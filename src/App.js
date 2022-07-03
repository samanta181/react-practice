import { useState } from 'react';
import logo from './img/rick-morty.png';

import './App.css';
import Caracters from './components/Caracters';

function App() {
  const [characters, setCharacters]= useState(null);
  const reqApi= async()=>{
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const caracterApi = await api.json();

    setCharacters(caracterApi.results);
    
  }

  
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
       {
        characters ? (
          <Caracters characters ={characters} setCharacter={setCharacters}/>
        ):(
          <>
           <img src={logo} alt="Rick & Morty" className="img-home" />
           <button onClick={reqApi} className="btn-search"> Buscar personaje</button>
          </>
        )
       }
       
      
      
      </header>
    </div>
  );
}

export default App;
