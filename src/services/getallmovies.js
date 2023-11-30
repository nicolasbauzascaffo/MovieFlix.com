import axios from "axios";

const getAllMovies = async (page) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=c04b94bd5b8ecfc9f02a9bdea354fcce`
    );
  } catch (error) {
    console.log(error);
  }
};

export default getAllMovies