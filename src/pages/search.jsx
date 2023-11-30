import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "../styles/search.css";
import SearchIcon from "@mui/icons-material/Search";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

function Search() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchParams.get(
          "keyword"
        )}&page=${page}&api_key=c04b94bd5b8ecfc9f02a9bdea354fcce`
      )
      .then((response) => {
        if (response.status === 200) {
          const newMovies = response.data.results;
          setMovies((prev) => [...prev, ...newMovies]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams, page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [open, setOpen] = React.useState(false);
  const [openStates, setOpenStates] = React.useState([]);

  const handleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = true;
    setOpenStates(newOpenStates);
    setOpen(true);
  };

  const handleClose = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = false;
    setOpenStates(newOpenStates);
    setOpen(false);
  };

  return (
    <div className="search">
      <h2>Search movies</h2>
      <form className="search-form">
        <input name="keyword" type="text" />
        <button type="submit" className="searchButon">
          {" "}
          <SearchIcon style={{ cursor: "pointer", marginRight: "2px" }} />{" "}
        </button>
      </form>
      <section className="movie-section">
        {loading ? (
          Array.from(new Array(20)).map((item, index) => (
            <Box key={index}>
              <Skeleton
                variant="rectangular"
                sx={{
                  borderRadius: "20px",
                  height: "250px",
                  width: "180px",
                }}
              />
            </Box>
          ))
        ) : movies.length === 0 ? (
          <p
            style={{
              width: "100%",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            No results ...
          </p>
        ) : (
          movies.map((movie, index) => (
            <React.Fragment key={index}>
              <Modal
                className="modal-container"
                open={openStates[index]}
                onClose={() => handleClose(index)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modal-box">
                  <img
                    className="modal-img"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <section className="modal-info">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {movie.title}
                    </Typography>
                    <hr />
                    <p>{movie.overview}</p>
                    <Rating
                      name="read-only"
                      value={movie.vote_average / 2}
                      readOnly
                    />
                    <Link to={`/${movie.id}`}>
                      <button>Know more</button>
                    </Link>
                  </section>
                </Box>
              </Modal>
              <section
                onClick={() => handleOpen(index)}
                className="movie_box"
                key={index}
              >
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </section>
            </React.Fragment>
          ))
        )}
      </section>
    </div>
  );
}

export default Search;
