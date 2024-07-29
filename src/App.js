
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import FAQ from './component/FAQ';
import Navbar from './component/Navbar';

import HomePage from './component/HomePage';
import About from './component/About';
import CancellationRefundPolicy from './component/CancellationRefundpolicy';
import Venue from './component/Venue';
import Themepage from './component/Themepage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/venue' element={<Venue/>}/>
      <Route path='/theme' element={<Themepage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cancellation' element={<CancellationRefundPolicy/>}/>
    </Routes>   
    </div>
     </BrowserRouter>
  );
}

export default App;
