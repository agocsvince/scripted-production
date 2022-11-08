import { Route, Routes } from "react-router-dom"
import './style.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home";

function App() {
  return (
    <div>
    <Header />
    <Routes >
        <Route exact path="/" element={<Home/>}/>
        <Route path='/produkciok' />
        <Route path='/sajat-fejlesztesek' />
        <Route path='/csapat' />
        <Route path='/kapcsolat' />
    </Routes>
    <Footer />

    </div>
  );
}

export default App;
