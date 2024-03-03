import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    return (
        <>
            <div className='mb-5'>


                <h2 className='text-2xl text-white pt-3 capitalize font-bold'>{title}</h2>

                <div className='mt-1  flex transition-all overflow-x-auto'>



                    <div className='flex justify-evenly mt-4 '>

                        {movies?.map((e) => (
                            <MovieCard data={e} key={e.id} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovieList