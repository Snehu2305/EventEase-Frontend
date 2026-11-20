
import {
  FiMapPin,
  FiChevronDown,
  FiBell,
  FiUser
} from 'react-icons/fi';

import '../styles/topbar.css';

function Topbar() {
  return (
    <header className="topbar">

      {/* Location */}
      <div className="topbar-location">
        <FiMapPin />
        <span>Navi Mumbai</span>
        <FiChevronDown className="dropdown-arrow" />
      </div>

      {/* Right Section */}
      <div className="topbar-actions">

        {/* Notifications */}
        <button
          className="notification-btn"
          aria-label="Notifications"
        >
          <FiBell />
          <span className="notification-dot"></span>
        </button>

        <div className="topbar-divider"></div>

        {/* Client View */}
        <button className="client-view-btn">
          <span className="status-dot"></span>
          Client view
          <FiChevronDown />
        </button>

        {/* Profile */}
        <button className="profile-btn" aria-label="Profile">
          <FiUser />
        </button>

      </div>

    </header>
  );
}

export default Topbar;
