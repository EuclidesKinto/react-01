import React, { useState, useEffect } from 'react';
import './App.css';
import {Movie} from './types/Movies';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  // useEffect(() => {
  //   loadMovies();
  // }, [])

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
      <div className="flex flex-col text-center w-full mb-5 border-b-2">
        <h1 className="sm:text-3xl text-2xl font-medium title-font my-4 text-gray-900">Filmes em Cartaz</h1>
        <div className='my-5'>
            <button className='py-2 px-3 bg-blue-400 rounded text-white'
            onClick={loadMovies}>Carregar Filmes</button>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-2">Total de Filmes: {movies.length}</p>
      </div>
      
      <div className='grid grid-cols-6 gap-3'>
        {movies.map((item, index)=>(
          <div  key={index}>
            <img className='w-32 block my-2' src={item.avatar} alt={item.titulo} />
            <div className="mt-2">
              <h2 className="text-gray-900 text-base">{item.titulo}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// https://api.b7web.com.br/cinema/
