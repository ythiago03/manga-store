import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Navbar from './components/Navbar/Navbar';
import Category from './routes/Category';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/category" element={<Category/>}/>
          {/* <Route path="/contact" element={<HomePage/>}/>
          <Route path="/questions" element={<HomePage/>}/>
          <Route path="/cart" element={<HomePage/>}/>
          <Route path="/item:id" element={<HomePage/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
