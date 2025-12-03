import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MapDetail from './pages/MapDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map/:id" element={<MapDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
