import './App.css';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="App">
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
  </div>
);

export default App;
