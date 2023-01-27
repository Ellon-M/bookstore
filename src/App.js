import React from 'react';
import './App.css';
import {
  Link, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Booklist from './components/Booklist';
import Categories from './components/Categories';

const App = () => (
  <div className="font-inter">
    <BrowserRouter>
      <nav className="shadow-md">
        <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h1 className="text-[#0290ff] font-bold text-4xl">Bookstore CMS</h1>
            <Link to="/" className="text-gray-500 text-lg font-semibold">Books</Link>
            <Link to="/categories" className="text-gray-500 text-lg font-semibold">Categories</Link>
          </div>

          <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
            <FaUser className="text-[#0290ff]" />
          </div>
        </div>
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
