import useMovieTrailer from "../../utils/hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerObj = useSelector((store) => store.movies.trailer);

  return (
    <div className="sm:pt-0 pt-16">
      <iframe
        className="w-full aspect-video  "
        src={
          "https://www.youtube.com/embed/" +
          trailerObj?.key +
          "?&autoplay=1&controls=0&&showinfo=0&mute=1&loop=1&playlist=" +
          trailerObj?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
