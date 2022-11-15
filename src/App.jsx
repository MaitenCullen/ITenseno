import { NavBar } from './components/NavBar';
import logo from './logo.svg';
import { Footer } from './components/Footer';
import { Home } from './screens/Home';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
