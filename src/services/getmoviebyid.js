import axios from "axios";

const getMovieById = async (id) => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c04b94bd5b8ecfc9f02a9bdea354fcce`
    );
  } catch (error) {
    console.log(error);
  }
};

export default getMovieById;
