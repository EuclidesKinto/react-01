import React, { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const loadMovies=()=>{
    fetch('https://api.b7web.com.br/cinema/')
      .then((res)=>{
        return res.json();
      })
      .then((json)=>{
        setMovies(json);
      });
  }

  return (
    <>
    <div className='flex flex-col'>
      <div>
        <button className='block m-5 py-2 px-3 bg-blue-400 rounded text-white'
        onClick={loadMovies}>Carregar Filmes</button>
      </div>
      <p className='m-5 text-gray-700'>Total de Filmes: {movies.length}</p>
    </div>
    
    </>
  );
}

export default App;

// https://api.b7web.com.br/cinema/
