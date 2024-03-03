import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const MovieContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div className=" bg-black">


            <div className="mx-10 pb-4   relative z-20">
                {
                    movies?.moviesList?.map((movies, i) => (

                        <MovieList title={movies.title} key={movies.title + i} movies={movies.list} />
                    ))
                }

            </div>
        </div>
    )
}

export default MovieContainer;