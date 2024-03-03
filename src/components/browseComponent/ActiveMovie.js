import React from "react";
import useMovieTrailer from "../../utils/hooks/useMovieTrailer";
import { useDispatch, useSelector } from "react-redux";
import {
  addDisplayMovie,
  addDisplayMovieTrailer,
} from "../../utils/store/moviesSlice";

const ActiveMovie = ({ data }) => {
  const dispatch = useDispatch();
  useMovieTrailer(data.id, false);

  const closeActiveMovies = () => {
    dispatch(addDisplayMovie(null));
    dispatch(addDisplayMovieTrailer(null));
  };

  const trailer = useSelector((store) => store.movies.displayMovieTrailer);

  return (
    <>
      <div className="z-40 bg-black  fixed w-screen h-screen  opacity-80"></div>
      <div className="flex flex-nowrap  justify-center h-screen items-center z-50  fixed w-screen ">
        <div className="  bg-black w-11/12 px-5  py-10 border-2 border-gray-600 rounded">
          <div
            className="text-white relative  cursor-pointer flex flex-row-reverse"
            onClick={closeActiveMovies}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
          <div className="flex flex-wrap  md:flex-nowrap">
            <div className="md:w-7/12 w-full">
              <iframe
                className="w-full aspect-video  "
                src={
                  "https://www.youtube.com/embed/" +
                  trailer?.key +
                  "?&autoplay=1&controls=0&&showinfo=0&mute=1&loop=1&playlist=" +
                  trailer?.key
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="ml-5 p-4 md:w-5/12">
              <h2 className="sm:text-4xl text-2xl font-bold text-gray-100">
                {data?.title}
              </h2>
              <p className="mt-4 text-gray-100 text-sm">{data?.overview}</p>
              <div className="text-gray-50 mt-2 font-semibold">
                {data?.vote_average} Avg. Ratings
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveMovie;
