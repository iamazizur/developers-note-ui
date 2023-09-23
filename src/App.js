import './App.css';
import CreateNote from './components/home/CreateNote';
import Home from './components/home/Home';
import Sample from './components/home/Sample';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header p-3">
          <Router>
            <nav>
              <Link to="/">Sample</Link>
              <Link to="/home">Home</Link>
              <Link to="/create">Create</Link>

            </nav>
            <Routes>
              <Route path="/" element={<Sample />} />
              <Route path="/home" element={<Home />} />
              <Route path='/create' element={<CreateNote />} />
            </Routes>
          </Router>
        </header>
      </div>
    </>

  );
}

export default App;
