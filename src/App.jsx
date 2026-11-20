
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DashboardLayout from './components/DashboardLayout.jsx';
import Discover from './pages/Discover.jsx';
import MyBookings from './pages/MyBookings.jsx';
import EventShield from './pages/EventShield.jsx';

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/discover" replace />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/eventshield" element={<EventShield/>} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
