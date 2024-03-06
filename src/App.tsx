import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Contact from './routes/Contact/Contact';
import Questions from './routes/Questions/Questions';
import ItemSelected from './routes/ItemSelected/ItemSelected';
import Cart from './routes/Cart/Cart';
import { CartContextProvider } from './context/CartContext';

const HomePage = lazy(() => import('./routes/home/HomePage'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Category = lazy(() => import('./routes/Categories/Category'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {


  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1 className="loading"></h1>}>
          <CartContextProvider>
            <header>
              <Navbar/>
            </header>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/category" element={<Category/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/questions" element={<Questions/>}/>
              <Route path="/item/:id" element={<ItemSelected/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
          </CartContextProvider>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
