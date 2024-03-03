
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const VideoContainer = () => {

    const data = useSelector(store => store?.movies?.moviesList?.[0]?.list);
    if (!data) return;
    const firstMovie = data[0];

    const { original_title, overview, id } = firstMovie;



    return (
        <>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </>
    )
}

export default VideoContainer;