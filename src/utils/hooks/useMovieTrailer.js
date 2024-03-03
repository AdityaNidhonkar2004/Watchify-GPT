import { useEffect } from "react"
import { API_OPT } from '../../utils/constant';
import { useDispatch, useSelector } from "react-redux";
import { addDisplayMovieTrailer, addTrailer } from "../store/moviesSlice";

const useMovieTrailer = (id, isTrailer = true) => {
    const dispatch = useDispatch();
    const trailer = useSelector(store => store.movies.trailer);
    const fetchMovieVideo = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPT);

        const videos = await data.json();
        const filterVideos = await videos?.results.filter((e) => e.type === "Trailer");
        let trailer = videos[0];
        if (filterVideos.length > 0) {
            trailer = filterVideos[0];
        }
        if (isTrailer) {
            dispatch(addTrailer(trailer))
        }
        else {

            dispatch(addDisplayMovieTrailer(trailer))
        }
    }
    useEffect(() => {
        if (!trailer || !isTrailer) {

            fetchMovieVideo();
        }
    }, [])

}

export default useMovieTrailer;