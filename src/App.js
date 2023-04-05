import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Vote from "./pages/Vote";

import CardLg from "./components/CardLg";
import CardSm from "./components/CardSm";
import CardXl from "./components/CardXl";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Person from "./components/Person";

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
      <div className="App">
        <Header />
        <section class="layout-lg">
          <div class="canvas">
            <CardSm />
          </div>
          <div class="modal">
            <CardLg />
          </div>
          <div class="vote">
            <div class="vote__card">
              <CardXl />
            </div>
            <div class="vote__top">
              <h1>Your top3:</h1>
              <div class="vote__cards">
                <CardSm />
              </div>
            </div>
          </div>
          <div class="book">
            <Person />
            <div class="cart">
              <CartItem />
              <h1>TOTAL:</h1>
              <button class="btn">Confirm</button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
