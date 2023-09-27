// App.js
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import './styles/App.css';
import Home from './Routes/HomeScreen';
import Quote from './Routes/QuoteScreen';
import Calculator from './Routes/CalculatorScreen';
import Header from './components/Header';

function Layout() {
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="*" element={<div>Page not found : (</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
