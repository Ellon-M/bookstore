import React from 'react';
import './App.css';
import {
  Link, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Booklist from './components/Booklist';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route index element={<Booklist />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
