import DrawerAppBar from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './screens/Home';


function App() {
  return (
    <div className="App">
      <DrawerAppBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
