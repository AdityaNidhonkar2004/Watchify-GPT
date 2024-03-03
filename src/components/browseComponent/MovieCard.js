import React from 'react'
import { IMAGE_URL } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addDisplayMovie } from '../../utils/store/moviesSlice';

const MovieCard = ({ data }) => {
    const dispatch = useDispatch();
    const handleMovieCardClick = () => {
        dispatch(addDisplayMovie(data));


    }
    return (
        <div className='sm:w-48 w-36 mr-3 cursor-pointer  ' onClick={handleMovieCardClick}>


            <img src={IMAGE_URL + data?.poster_path} alt={data?.original_title} />
            <div className='text-white font-bold relative  '>{data?.title}</div>

        </div>
    )
}

export default MovieCard