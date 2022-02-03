import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import ListDishes from './components/pages/listDishes/ListDishes';
import SearchDishe from './components/pages/searchDishe/SearchDishe';
import Dishe from './components/pages/dishe/Dishe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listdishes" element={<ListDishes />} />
        <Route path="/searchdishe" element={<SearchDishe />} />
        <Route path="/dishes/:id" element={<Dishe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
