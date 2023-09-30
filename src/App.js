import './App.css';
import CreateNote from './components/home/CreateNote';
import Home from './components/home/Home';
import Sample from './components/home/Sample';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SubNotes from './components/subnotes/SubNotes';


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header p-3">
          <Router>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/sample">Sample</Link>
              <Link to="/create">Create</Link>
              <Link to="/subnotes">Subnotes</Link>
            </nav>
            <Routes>
              <Route path="/sample" element={<Sample />} />
              <Route path="/" element={<Home />} />
              <Route path='/create' element={<CreateNote />} />
              <Route path='/subnotes' element={<SubNotes />} />
            </Routes>
          </Router>
        </header>
      </div>
    </>

  );
}

export default App;
