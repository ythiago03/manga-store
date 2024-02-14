import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/category" element={<HomePage/>}/>
          <Route path="/contact" element={<HomePage/>}/>
          <Route path="/questions" element={<HomePage/>}/>
          <Route path="/cart" element={<HomePage/>}/>
          <Route path="/item:id" element={<HomePage/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
