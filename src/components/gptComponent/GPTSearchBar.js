import React, { useRef } from 'react'
import lang from '../../utils/lagnConst'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { API_OPT, SEARCH_QUERY } from '../../utils/constant';
import { addRecommendedMovies } from '../../utils/store/gptSlice';
import connetOpenAI from "../../utils/openai";

const GPTSearchBar = ({ apiKey, setMessage }) => {
  const currentLang = useSelector(store => store.lang.currentLang);
  const dispatch = useDispatch()
  const searchText = useRef();
  const openai = connetOpenAI(apiKey);



  const filterMovies = (movies, gptResult) => {
    const movieArray = [];
    movies.map(e => {
      movieArray.push(...e.results);
    })
    const filteredMovies = movieArray.filter(movie => (
      movie.poster_path !== null
    ))
    return filteredMovies;
  }

  const getMovieRecomendation = async (movie) => {

    const data = await fetch(SEARCH_QUERY + movie, API_OPT);
    const json = await data.json();
    return json;
  }

  const handleSearchBtnClick = async () => {
    setMessage('Please Wait...');
    const query = "Act as movies recommendation system and recommend some movies for query : " + searchText.current.value + ". give only five movies name in comma seprated format. your response should look like Gadar,Maze runner,Don,Heraferi,Avengers";
    const chatResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    const gptResult = chatResults?.choices[0]?.message?.content?.toLowerCase()?.split(", ");


    let movieRecomendation = gptResult.map(movie => getMovieRecomendation(movie));
    movieRecomendation = await Promise.all(movieRecomendation);
    movieRecomendation = filterMovies(movieRecomendation, gptResult);

    dispatch(addRecommendedMovies(movieRecomendation));
    setMessage(null);

  }


  return (
    <div>
      <form action="" className='text-center' onSubmit={e => e.preventDefault()}>
        <input type="text" ref={searchText} className='bg-slate-800 sm:w-3/4 w-11/12 text-gray-50 px-4 py-2 mt-4 rounded-s-full rounded-e-full border-cyan-600 border-2 caret-cyan-500 ' placeholder={lang[currentLang].searchBarPlaceholder} />

        <button className='bg-cyan-600 px-3 ml-5 py-2 fw-bold mt-5 sm:w-auto w-3/4  text-white rounded border-cyan-300 border-2' onClick={handleSearchBtnClick}>
          {lang[currentLang].search}
        </button>

      </form>
    </div>
  )
}

export default GPTSearchBar