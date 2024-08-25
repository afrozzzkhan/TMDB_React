import './App.css';
import Movies from './components/Movies/';
import Banner from './components/Banner';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      
      <Banner/>
      <Movies/>
      <Details/>
    </div>
  );
}

export default App;
