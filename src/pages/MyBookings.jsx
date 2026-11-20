
import { useState } from 'react';
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiSearch,
  FiClock,
  FiEye,
  FiXCircle,
  FiCheckCircle,
  FiClipboard,
  FiShield
} from 'react-icons/fi';

import bookings from '../data/bookings';
import '../styles/my-bookings.css';

const filters = ['All', 'Upcoming', 'Completed', 'Cancelled'];

function MyBookings() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBookings = bookings.filter((booking) => {
    const matchesFilter =
      activeFilter === 'All' || booking.status === activeFilter;

    const matchesSearch =
      booking.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const upcomingCount = bookings.filter(
    (booking) => booking.status === 'Upcoming'
  ).length;

  const completedCount = bookings.filter(
    (booking) => booking.status === 'Completed'
  ).length;

  const cancelledCount = bookings.filter(
    (booking) => booking.status === 'Cancelled'
  ).length;

  const formatDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

  const formatPrice = (amount) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);

  const getStatusIcon = (status) => {
    if (status === 'Upcoming') return <FiClock />;
    if (status === 'Completed') return <FiCheckCircle />;
    return <FiXCircle />;
  };

  return (
  <div className="my-bookings-page">

    {/* Page Heading */}
    <div className="bookings-header">
      <div>
        <span className="section-eyebrow">
          YOUR EVENTS, ALL IN ONE PLACE
        </span>
        <h1>My Bookings</h1>
        <p>
          Every milestone, vendor and rupee accounted for.
        </p>
      </div>
    </div>

    {bookings.length === 0 ? (

      /* Empty Booking State */
      <section className="empty-bookings-page">
        <div className="empty-booking-illustration">
          <FiCalendar />
          <span>+</span>
        </div>

        <span className="empty-booking-label">
          YOUR EVENT JOURNEY STARTS HERE
        </span>

        <h2>No bookings yet!</h2>

        <p>
          You haven't booked any events yet. Explore our curated
          event packages and find the perfect experience for
          your special occasion.
        </p>

        <button
          className="explore-bookings-btn"
          onClick={() => {
            window.location.href = '/discover';
          }}
        >
          <FiSearch />
          Explore Events
        </button>

        <div className="empty-booking-note">
          <FiShield />
          <span>
            Your payments are protected with EventShield.
          </span>
        </div>
      </section>

    ) : (

      /* Existing booking dashboard */
      <>
        <section className="booking-summary">
          <div className="summary-card">
            <div className="summary-icon total-icon">
              <FiClipboard />
            </div>
            <div>
              <p>Total Bookings</p>
              <h2>{bookings.length}</h2>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon upcoming-icon">
              <FiCalendar />
            </div>
            <div>
              <p>Upcoming</p>
              <h2>{upcomingCount}</h2>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon completed-icon">
              <FiCheckCircle />
            </div>
            <div>
              <p>Completed</p>
              <h2>{completedCount}</h2>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon cancelled-icon">
              <FiXCircle />
            </div>
            <div>
              <p>Cancelled</p>
              <h2>{cancelledCount}</h2>
            </div>
          </div>
        </section>

        {/* Keep your existing booking list, filters,
            search and booking cards here. */}

      </>
    )}
  </div>
);

  
}

export default MyBookings;
