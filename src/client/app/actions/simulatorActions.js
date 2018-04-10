import {RECEIVE_DATA} from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveData(json) {
  return {type: RECEIVE_DATA, stuff: json.data};
}

export function fetchData() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveData(json)));
  };
}
