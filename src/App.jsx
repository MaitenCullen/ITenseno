import { NavBar } from './components/NavBar';
import Footer from './components/Footer';

import { Footer } from './components/Footer';
import { Home } from './screens/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
