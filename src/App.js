import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  const links = [
    { id: 1, val: 'books', route: '/' },
    { id: 2, val: 'categories', route: '/categories' },
  ];
  return (
    <Router>
      <NavBar links={links} />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route
          exact
          path="/categories"
          element={<Categories />}
        />
      </Routes>
    </Router>
  );
}

export default App;
