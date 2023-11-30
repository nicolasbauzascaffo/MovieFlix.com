import React, { useState, useEffect } from "react";
import getAllMovies from "../services/getallmovies";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [openStates, setOpenStates] = React.useState([]);
  const [open, setOpen] = React.useState(false);

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

  useEffect(() => {
    setLoading(true);
    getAllMovies(page)
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
  }, [page]);

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

  return (
    <div className="movies">
        <section className="movie-section">
          {loading
            ? Array.from(new Array(20)).map((item, index) => (
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
            : movies.map((movie, index) => (
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
                        <p>{movie.overview.split(". ")[0]}</p>
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
              ))}
        </section>
    </div>
  );
}

export default Movies;
