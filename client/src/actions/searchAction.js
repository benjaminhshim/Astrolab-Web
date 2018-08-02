import { FETCH_TERM, FETCH_LOCATION } from './types';
export const fetchSearch = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(term => dispatch({
            type: FETCH_TERM,
            payload: term
        }
    ))
}