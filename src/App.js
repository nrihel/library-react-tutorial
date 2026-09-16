import './App.css';
import Nav from './components/nav.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Books from './pages/Books.jsx';
import { books } from './data';
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/books"  render={() => <Books books={books} />} />
          <Route path="/books/1" render={() => <BookInfo books={books} />} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
