import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Vote from "./pages/Vote";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/vote" element={<Vote />} />
          {/* <Route path="/singleshow/:id" element={<Singlepage />} /> */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
