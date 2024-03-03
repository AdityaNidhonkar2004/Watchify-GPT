import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            trailer: null,
            moviesList: [],
            displayMovie: null,
            displayMovieTrailer: null
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
            },
            addTrailer: (state, action) => {
                state.trailer = action.payload;
            },
            addMoviesList: (state, action) => {
                state.moviesList.push(action.payload)
            },
            addDisplayMovie: (state, action) => {
                state.displayMovie = action.payload
            },

            addDisplayMovieTrailer: (state, action) => {
                state.displayMovieTrailer = action.payload
            }
        }
    }
)

export const { addNowPlayingMovies, addTrailer, addMoviesList, addDisplayMovie, addDisplayMovieTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;