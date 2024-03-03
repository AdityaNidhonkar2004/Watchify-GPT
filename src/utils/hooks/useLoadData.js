import { API_OPT } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesList } from "../store/moviesSlice";
import { useEffect } from "react";

const useLoadData = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    const dispatch = useDispatch();
    const movieAPIList = [
        { title: 'now playing movies', url: "movie/now_playing" },
        { title: 'popular movies', url: "movie/popular" },
        { title: 'top rated movies', url: "movie/top_rated" },
        { title: 'upcoming movies', url: "movie/upcoming" },


    ]
    const getNowPlayingMovies = async (title, url) => {
        const data = await fetch("https://api.themoviedb.org/3/" + url + "?page=1", API_OPT);
        const json = await data.json();

        dispatch(addMoviesList({ title: title, list: json?.results }))

    }
    useEffect(() => {
        if (!nowPlayingMovies) {
            for (let url of movieAPIList) {
                getNowPlayingMovies(url.title, url.url);
            }
        }

    }, [])
}

export default useLoadData;