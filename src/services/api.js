import axios from 'axios';

const URL = `https://pixabay.com/api/`;
const API_KEY = '40531611-c718006264cffa07f6ed617b2';

export function fetchImages(searchText, page) {
  const params = {
    key: API_KEY,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios
    .get(`${URL}?page=${page}&q=${searchText}`, { params })
    .then(response => {
      return response.data;
    });
}