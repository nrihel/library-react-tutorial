import './App.css';
import Nav from './components/nav.jsx';
import Landing from './components/Landing.jsx';
import Highlights from './components/Highlights.jsx';
import Featured from './components/ui/Featured.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
