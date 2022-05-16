import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import JornalData from './Jornal-Data';

// <i class="ri-map-pin-2-fill"></i> location icon


function App() {
  const main = JornalData.map((item) =>
    <Main 
      items = {item}
    />
  )
  return (
    <div className="App">
      <Nav />
      {main}
    </div>
  );
}

export default App;
