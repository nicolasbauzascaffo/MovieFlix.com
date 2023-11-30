import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function Layout({ movies, setMovies, page, setpage, searchParams }) {
  return (
    <div>
      <Navbar
        movies={movies}
        setMovies={setMovies}
        page={page}
        setpage={setpage}
        searchParams={searchParams}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
