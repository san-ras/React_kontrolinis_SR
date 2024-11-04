import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./NavBar";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Review } from "./pages/Review";
import { Add } from "./pages/Add";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
