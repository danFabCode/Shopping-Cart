import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/store';
import Cancel from './pages/cancel';
import Success from './pages/success';
import { CartProvider } from './cartContext';

function App() {
  return (
      <CartProvider>
        <div className="App">
          
            <Navbar />
            <BrowserRouter>
              <Routes>
                <Route index element={<Store/>}/>
                <Route path='/cancel' element={<Cancel/>}/>
                <Route path='/success ' element={<Success/>}/>
              </Routes>
            </BrowserRouter>
            
            
          </div>
      </CartProvider>
   
  );
}

export default App;
