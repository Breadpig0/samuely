import NavBar from "./components/NavBar";
import "./styles.css";
import ShowDog from "./components/Dogs";
import ShowCat from "./components/Cats";
import About from "./components/About";
import Home from "./components/Home";
import Form from "./components/Form";
import Login from "./components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cats" element={<ShowCat />} />
            <Route path="/dogs" element={<ShowDog />} />
            <Route path="/adopt" element={<Form />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
