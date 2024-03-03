import React from 'react'
import { useSelector } from 'react-redux'
import { IMAGE_URL } from '../../utils/constant';

const GPTSuggetions = () => {
  const recommendedMovies = useSelector(store => store.gpt.recommendedMovies);
  return (
    <>
      {recommendedMovies.length > 0 &&
        < div className='p-4'>

          <h2 className="sm:text-4xl text-2xl mb-6 mt-6 font-bold  text-white">
            Recommended Movies
          </h2>
          <div className="flex flex-wrap justify-around">

            {
              recommendedMovies.map(movie => (
                <div className='border-2 border-cyan-600 rounded p-3 mb-4 sm:w-60 w-4/5 text-white' key={movie.id}>
                  <div className="imageDiv mb-4">
                    <img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
                  </div>
                  <div className=' '>
                    <div className="font-bold text-xl">{movie.title}</div>
                    <div className=''>({movie.release_date})</div>
                    <div className='mt-2 text-gray-100'>
                      {movie.overview}
                    </div>
                  </div>


                </div>

              ))
            }
          </div>
        </div >

      }
    </>

  )
}

export default GPTSuggetions