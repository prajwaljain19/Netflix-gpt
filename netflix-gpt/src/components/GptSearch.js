import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
  return (
    <div className='bg-slate-300'>
      <GptSearchBar />
      <GptMovieSuggestion />
 </div> 
  );
};

export default GptSearch
