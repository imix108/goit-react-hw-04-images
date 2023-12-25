import axios from 'axios';

const URL = `https://pixabay.com/api/`;
const API_KEY = '40531611-c718006264cffa07f6ed617b2';

export async function fetchImages(searchText, page) {
  const params = {
    key: API_KEY,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  const response = await axios
    .get(`${URL}?page=${page}&q=${searchText}`, { params });
  return response.data;
}