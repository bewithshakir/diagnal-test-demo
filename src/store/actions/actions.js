import { GET_MOVIES, MOVIES_LOADING, SEARCH_MOVIES } from '../actions/types';

// Movies loading
export const setMovieLoading = () => {
    return {
      type: MOVIES_LOADING
    };
};


export const getMovies = (count)=> {
    return dispatch => {
        dispatch(setMovieLoading());
        setTimeout(()=> {
            import(`../../apis/CONTENTLISTINGPAGE-PAGE${count}.json`).then(res => {
                dispatch({type: GET_MOVIES, payload: res.page});
              });
        }, 100)
    }
}

export const searchMovies = (name)=> {
    return dispatch=> {
        dispatch(setMovieLoading());
        dispatch({type: SEARCH_MOVIES, payload: name});
    }
}