import axios from 'axios';

axios.defaults.baseURL = `https://organick.onrender.com/api/products`;
// const API_KEY = '0214e4f6556edfc65f2eadfc23b43510';
// const params = {
//   api_key: API_KEY,
//   page: 1,
// };

export const getAllProducts = async () => {
  try {
    const responce = await axios('/');
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPopularProducts = async () => {
  try {
    const responce = await axios('/popular');
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getRandomProducts = async () => {
  try {
    const responce = await axios('/random');
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneProducts = async () => {
  try {
    const responce = await axios('/:id');
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

// export const fetchMovieDetails = async id => {
//   try {
//     const responce = await axios(`/movie/${id}`, { params });
//     return responce.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const fetchMovieCast = async id => {
//   try {
//     const responce = await axios(`/movie/${id}/credits`, { params });
//     return responce.data.cast;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const fetchMovieReviews = async id => {
//   try {
//     const responce = await axios(`/movie/${id}/reviews`, { params });
//     return responce.data.results;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
