import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import { Home } from './screens/Home';
import NavBar from './components/NavBar';
import Register from './screens/Register';
import Login from './screens/Login';
import Profile  from './screens/Profile';
import ProfilePublic from './screens/ProfilePublic';
import Search from './screens/Search';


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
          <Route path='/profile-public' element={<ProfilePublic/>}/>
          <Route path='/Search' element={<Search/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
