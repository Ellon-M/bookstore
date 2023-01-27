import React from 'react';
import './App.css';
import {
  Link, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Booklist from './components/Booklist';
import Categories from './components/Categories';

const App = () => (
  <div className="max-w-7xl mx-auto my-5 p-5 bg-white">
    <BrowserRouter>
      <nav className="flex">
        <h1 className="text-[#0290ff]">Bookstore CMS</h1>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>

      <Routes>
        <Route index element={<Booklist />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
