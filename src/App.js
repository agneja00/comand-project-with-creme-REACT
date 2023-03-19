import './App.css';
import routes from './constants/routes';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.homePage} element={<HomePage />}/>
        <Route path={routes.productsPage} element={<ProductsPage />}/>
        <Route path={routes.productPage} element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
