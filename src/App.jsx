import "./App.css";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Moviedetails from "./pages/moviedetails";
import About from "./pages/about";
import Search from "./pages/search";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path=":id" element={<Moviedetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
