
import { NavLink } from 'react-router-dom';
import {
  FiSearch,
  FiCalendar,
  FiShield,
  FiGrid,
  FiAward
} from 'react-icons/fi';

import '../styles/sidebar.css';
import eventeaseLogo from '../assets/logo.png';
function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
      <img
        src={eventeaseLogo}
        alt="EventEase - Good events, guaranteed."
        className="eventease-logo"
      />
      </div>

      {/* User Navigation */}
      <div className="sidebar-section">
        <p className="sidebar-heading">YOUR SPACE</p>

        <nav className="sidebar-nav">

          <NavLink to="/discover" className="sidebar-link">
            <FiSearch />
            <span>Discover</span>
          </NavLink>

          <NavLink to="/my-bookings" className="sidebar-link">
            <FiCalendar />
            <span>My Bookings</span>
          </NavLink>

          <NavLink to="/eventshield" className="sidebar-link">
            <FiShield />
            <span>EventShield</span>
          </NavLink>

        </nav>
      </div>

      <div className="sidebar-divider"></div>

      {/* Professional Navigation */}
      <div className="sidebar-section">
        <p className="sidebar-heading">FOR EVENT PROFESSIONALS</p>

        <nav className="sidebar-nav">

          <NavLink to="/eventos-suite" className="sidebar-link">
            <FiGrid />
            <span>Eventos Suite</span>
          </NavLink>

          <NavLink to="/become-partner" className="sidebar-link">
            <FiAward />
            <span>Become a partner</span>
          </NavLink>

        </nav>
      </div>

      {/* EventShield Information Card */}
      <div className="sidebar-protection-card">
        <FiShield />
        <h4>Every milestone, protected.</h4>
        <p>Your payments stay in escrow until the work is done.</p>
        <a href="/eventshield">How protection works →</a>
      </div>

    </aside>
  );
}

export default Sidebar;
