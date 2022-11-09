import { Route, Routes } from "react-router-dom"
import './style.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Productions from "./pages/Productions/Productions";

function App() {
  return (
    <div>
      <Header />
      <Routes >
          <Route exact path="/" element={<Home/>}/>
          <Route path='/produkciok' element={<Productions/>}/>
          <Route path='/sajat-fejlesztesek' element={<Home/>}/>
          <Route path='/csapat' element={<Home/>}/>
          <Route path='/kapcsolat' element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
