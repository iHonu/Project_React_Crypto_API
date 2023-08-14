import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import MainPage from './pages/MainPage';
import CoinPage from './pages/CoinPage';
import CoinNotFound from './pages/CoinNotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/coin-not-found" element={<CoinNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
