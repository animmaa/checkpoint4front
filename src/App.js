import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import ListDishes from './components/pages/listDishes/ListDishes';
import SearchDishe from './components/pages/searchDishe/SearchDishe';
import Dishe from './components/pages/dishe/Dishe';
import './global.scss';
import Login from './components/login/Login';
import CreateDishes from './components/pages/createDishes/CreateDishes';
import InsertIngredients from './components/pages/insertIngredients/InsertIngredients';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateDishes />} />
      <Route path="/listdishes" element={<ListDishes />} />
      <Route path="/listdishes/:id" element={<ListDishes />} />
      <Route path="/searchdishe" element={<SearchDishe />} />
      <Route path="/dishes/:id" element={<Dishe />} />
      <Route path="/create/:id" element={<InsertIngredients />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
