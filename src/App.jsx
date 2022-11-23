import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Footer from './components/Footer';
import { Home } from './screens/Home';
import NavBar from './components/NavBar';
import Register from './screens/Register';
import Login from './screens/Login';
import { ProfilePublic } from './screens/ProfilePublic';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/profile-public' element={<ProfilePublic />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
