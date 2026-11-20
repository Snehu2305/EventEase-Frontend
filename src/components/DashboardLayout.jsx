
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../styles/dashboard.css';

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">

      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <div className="main-content">

        {/* Top Navigation */}
        <Topbar />

        {/* Dynamic Page Content */}
        <main className="dashboard-page">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;
