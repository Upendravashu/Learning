import React from 'react';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Registration from './component/Registration';
import Hooks from './component/Hooks';
import UseEffect from './component/UseEffect';
 
const App = () => {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/registration' element={<Registration/>}>Registration</Route>
        <Route path='/hooks' element={<Hooks/>}>Hooks</Route>
        <Route path='/useEffect' element={<UseEffect/>}>UseEffect</Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;