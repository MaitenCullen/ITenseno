import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Footer from './components/Footer';
import { Home } from './screens/Home';
import NavBar from './components/NavBar';
import Register from './screens/Register';
import Login from './screens/Login';
import Profile  from './screens/Profile';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
