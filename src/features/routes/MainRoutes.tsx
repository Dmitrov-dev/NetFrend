import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../../pages/home/MainPage";
import { Layout } from "../../app/layout/Layout";
import { MovieDetails } from "../../entities/movie/MovieDetails/MovieDetails";


export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}