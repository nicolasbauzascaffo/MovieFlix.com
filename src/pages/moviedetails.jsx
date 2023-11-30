import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovieById from "../services/getmoviebyid";
import "../styles/details.css";
import lights from "../images/ligths.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

function Moviedetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id)
      .then((response) => {
        if (response.status === 200) {
          setMovie(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      style={{ backgroundImage: `url(${lights})`, backgroundSize: "cover" }}
      className="movie-details"
    >
      <Link to="/">
        <ArrowBackIosIcon
          className="arrowBack"
          style={{ textDecoration: "none", color: "white" }}
        />
      </Link>
      {!movie ? (
        <span className="loader"></span>
      ) : (
        movie && (
          <section className="movie-details-box">
            {movie.poster_path && (
              <img
                className="poster-details"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <section className="details">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <section
                className="genres-box"
                style={{ display: "flex", gap: "10px" }}
              >
                {movie.genres.map((mov, index) => (
                  <section key={index}>
                    <h6 className="genres">{mov.name || ""}</h6>
                  </section>
                ))}
              </section>
              <p style={{ fontWeight: "bold" }}>
                Country:{" "}
                {movie.production_countries.length === 0
                  ? ""
                  : movie.production_countries[0].name}
              </p>
              <p style={{ fontWeight: "bold" }}>Date: {movie.release_date}</p>
              <button style={{ width: "120px" }} className="searchButon">
                Play
              </button>
              <section className="company-logo">
                {movie.production_companies.length === 0
                  ? ""
                  : movie.production_companies
                      .filter((x) => x.logo_path !== null)
                      .map((mov, index) => (
                        <section key={index}>
                          <img
                            className="company-logo-img"
                            src={`https://image.tmdb.org/t/p/w500${mov.logo_path}`}
                            alt="logo-ca"
                          />
                        </section>
                      ))}
              </section>
            </section>
          </section>
        )
      )}
    </div>
  );
}

export default Moviedetails;
