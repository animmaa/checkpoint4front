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
import LoginProvider from './context/LoginProvider';
import AdminRoutes from './components/adminRoutes/AdminRoutes';

const App = () => (
  <div className="App">
    <LoginProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listdishes" element={<ListDishes />} />
        <Route path="/listdishes/:id" element={<ListDishes />} />
        <Route path="/searchdishe" element={<SearchDishe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="/admin/create" element={<CreateDishes />} />
          <Route path="/admin/dishes/:id" element={<Dishe />} />
          <Route path="/admin/create/:id" element={<InsertIngredients />} />
        </Route>
      </Routes>

      <Footer />
    </LoginProvider>
  </div>
);

export default App;
