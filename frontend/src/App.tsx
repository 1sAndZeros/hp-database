import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './react-frontend/components/Navbar';
import Home from './react-frontend/pages/Home';
import Login from './react-frontend/pages/Login';
import Dashboard from './react-frontend/pages/Dashboard';
import Scheduler from './react-frontend/pages/Scheduler';
import Maintenance from './react-frontend/pages/Maintenance';
import MachineCardSingle from './react-frontend/pages/MachineCardSingle';
import NotFound from './react-frontend/pages/NotFound';
import Footer from './react-frontend/pages/Footer';

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/machinecardsingle" element={<MachineCardSingle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
