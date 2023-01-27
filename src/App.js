import React from 'react';
import './App.css';
import {
  Link, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Booklist from './components/Booklist';
import Categories from './components/Categories';

const App = () => (
  <div className="max-w-7xl mx-auto my-5 bg-white font-inter">
    <BrowserRouter>
      <nav className="flex items-center gap-5 shadow-md p-5">
        <h1 className="text-[#0290ff] font-bold text-4xl">Bookstore CMS</h1>
        <Link to="/" className="text-gray-500 text-lg font-semibold">Books</Link>
        <Link to="/categories" className="text-gray-500 text-lg font-semibold">Categories</Link>
      </nav>

      <div className="p-5">
        <Routes>
          <Route index element={<Booklist />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
