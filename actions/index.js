import SomethingFetcher from '../utils/somethingFetcher';

export const addThing = (text) => {
  return {
    type: 'ADD_THING',
    text
  }
}

export function fetchThing(text) {
  return dispatch => {
    SomethingFetcher.fetch(text)
      .then((response) => {
        dispatch(addThing(response.text));
      });
  };
}
