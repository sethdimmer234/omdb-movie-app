import './App.css';

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
