import { MOVIES_LOADING, GET_MOVIES, SEARCH_MOVIES } from "../actions/types";

const initialState = {
  movies: [],
  movieType: "",
  loading: false,
};
let oldStateMovies = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES:
      oldStateMovies = [...oldStateMovies, ...action.payload["content-items"].content];
      return {
        ...state,
        movies: state.movies.slice().concat(action.payload["content-items"].content),
        movieType: action.payload["title"],
        loading: false,
      };
      case SEARCH_MOVIES:
        const filteredMovies = action.payload ? 
          state.movies.filter(item=> item.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())): 
          oldStateMovies;
      return {
        ...state,
        movies: filteredMovies,
        loading: false,
      };
    default:
      return state;
  }
}
