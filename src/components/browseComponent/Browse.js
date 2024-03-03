
import useLoadData from "../../utils/hooks/useLoadData";
import Header from "../loginComponent/Header";
import VideoContainer from "./VideoContainer";
import MovieContainer from "./MovieContainer";
import GPTSearch from "../gptComponent/GPTSearch";
import { useSelector } from "react-redux";
import ActiveMovie from "./ActiveMovie";


const Browse = () => {
    useLoadData();
    const GPTSearchStatus = useSelector(store => store.gpt.GPTSearchView);
    const movieData = useSelector(store => store.movies.displayMovie);


    return (
        <>




            <Header />
            {
                GPTSearchStatus ? <GPTSearch /> :
                    <>
                        {
                            movieData &&
                            <ActiveMovie data={movieData} />
                        }
                        <VideoContainer />
                        <MovieContainer />
                    </>

            }



        </>
    )
}

export default Browse