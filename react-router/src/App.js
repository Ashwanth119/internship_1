// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Authentication from './Components/Authentication';
import Login from './Components/Login';
import Register from './Components/Register';
import NavBar from './Components/NavBar';
import Example from './pages/Example';
import Product from './Components/Product';
import About from './Components/About';
import SearchParams from './Components/SearchParams';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/authentication' element={<Authentication/>} >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<div>Authentication SubPage Not Found</div>} />
        </Route>
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>      

        {/* <Routes> */}
          {/* <Route path='products/:id' element={<Product />} /> */}
          {/* <Route path='/category/:cat_id/products/:prod_id' element={<Product />} /> */}
        {/* </Routes> */}

        {/* <Routes>
          <Route path='/searchparams' element={<SearchParams />} />
        </Routes> */}

      </BrowserRouter>
      {/* <Example/> */}
    </>
  );
}

export default App;
