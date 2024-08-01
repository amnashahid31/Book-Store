import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/homepage';
import Navbar from './components/navbar';
import Details from './components/bookDetails';
import Login from './components/login';
import Footer from './components/footer';
import Main from './components/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/books' element={<Details/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/main' element={<Main/>}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
