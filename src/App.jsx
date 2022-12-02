
import Footer from './components/Footer';
import { Home } from './screens/Home';
import NavBar from './components/NavBar';
import Search from './screens/Search';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer />
      {/* <Search/> */}
    </div>
  );
}

export default App;
