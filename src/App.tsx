import React, { useState, useEffect } from 'react';
import './App.css';
import {Movie} from './types/Movies';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    loadMovies();
  }, [])

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
    <div className='container mx-auto'>
      {/* <div>
        <button className='block m-5 py-2 px-3 bg-blue-400 rounded text-white'
        onClick={loadMovies}>Carregar Filmes</button>
      </div> */}
      <p className=' text-gray-700 my-5'>Total de Filmes: {movies.length}</p>
    <div className='grid grid-cols-6 gap-3'>
      {movies.map((item, index)=>(
        <div  key={index}>
          <img className='w-32 block my-2' src={item.avatar} alt={item.titulo} />
          <p>{item.titulo}</p>
        </div>
      ))}
    </div>
    
    </div>
  );
}

export default App;

// https://api.b7web.com.br/cinema/
