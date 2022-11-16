import { Route, Routes } from "react-router-dom"
import './style.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Productions from "./pages/Productions/Productions";
import OwnDeveloped from "./pages/OwnDeveloped/OwnDeveloped";
import DetailProd from "./pages/DetailProd/DetailProd";
import Team from "./pages/Team/Team";
import DetailTeam from "./pages/DetailTeam/DetailTeam";

function App() {
  return (
    <div>
      <Header />
      <Routes >
          <Route exact path="/" element={<Home/>}/>
          <Route path='/produkciok' element={<Productions/>}/>
          <Route path='/produkciok/:id' element={<DetailProd/>}/>
          <Route path='/sajat-fejlesztesek' element={<OwnDeveloped/>}/>
          <Route path='/csapat' element={<Team/>}/>
          <Route path='/csapat/:id' element={<DetailTeam/>}/>
          <Route path='/kapcsolat' element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
