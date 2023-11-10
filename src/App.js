// import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Movies from "./Pages/Movies";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Movies" exact element={<Movies/>} />



      </Routes>

  </div>
  <Footer />
  </Router>
  );
}

export default App;
