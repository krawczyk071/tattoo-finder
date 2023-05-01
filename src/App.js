import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Vote from "./pages/Vote";
import Book from "./pages/Book";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/book" element={<Book />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
