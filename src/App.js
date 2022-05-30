import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Shared/Footer/Footer';
import AllParts from './components/AllParts/AllParts';
import NotFound from './Shared/NotFound/NotFound';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/part' element={
          <RequireAuth>
            <AllParts></AllParts>
          </RequireAuth>
        }></Route>

        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div >
  );
}

export default App;
