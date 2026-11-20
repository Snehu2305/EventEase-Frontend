
import { useState } from 'react';

import {
  FiMapPin,
  FiCalendar,
  FiArrowRight,
  FiHeart,
  FiStar
} from 'react-icons/fi';

import events from '../data/events';
import '../styles/discover.css';

// Event Categories
const categories = [
  { name: 'All Events', icon: '✦' },
  { name: 'Wedding', icon: '💍' },
  { name: 'Birthday', icon: '🎂' },
  { name: 'Corporate', icon: '🏢' },
  { name: 'Other', icon: '🎉' }
];

function Discover() {
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [favorites, setFavorites] = useState([]);

  // Toggle Favorite Events
  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  // Add Event Package
  const handleAddEvent = (event) => {
    alert(
      `${event.title} selected! Booking functionality will be available soon.`
    );
  };

  // Filter Events by Category
  const filteredEvents = events.filter((event) => {
    return (
      activeCategory === 'All Events' ||
      event.category === activeCategory
    );
  });

  // Format Price
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);

  return (
    <div className="discover-page">

      {/* ================= WELCOME SECTION ================= */}

      <section className="welcome-section">

        <div className="welcome-content">

          <span className="welcome-label">
            DISCOVER EXPERIENCES
          </span>

          <h1>
            Make Every Moment
            <br />
            <span>Unforgettable.</span>
          </h1>

          <p>
            Find the perfect event packages and turn your
            special occasions into beautiful memories.
          </p>

          <button
            className="welcome-btn"
            onClick={() =>
              document.getElementById('event-list')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            Explore Events
            <FiArrowRight />
          </button>

        </div>

        <div className="welcome-image">

          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85"
            alt="Beautifully decorated event venue"
          />

          <div className="welcome-image-overlay"></div>

          <div className="welcome-image-caption">
            <span>CREATE MOMENTS</span>
            <h3>Worth Remembering</h3>
          </div>

        </div>

      </section>

      {/* ================= EVENT CATEGORIES ================= */}

      <section className="categories-section">

        <div className="section-heading categories-heading">

          <div>
            <span className="section-eyebrow">
              EXPLORE BY CATEGORY
            </span>

            <h2>Browse Categories</h2>

            <p>
              Find the perfect event package for your special occasion.
            </p>
          </div>

        </div>

        {/* Category Filters */}

        <div className="category-list">

          {categories.map((category) => (

            <button
              key={category.name}
              className={`category-item ${
                activeCategory === category.name ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category.name)}
            >

              <span className="category-icon">
                {category.icon}
              </span>

              <span>{category.name}</span>

            </button>

          ))}

        </div>

      </section>

      {/* ================= EVENT PACKAGES ================= */}

      <section className="events-section" id="event-list">

        <div className="section-heading events-heading">

          <div>
            <span className="section-eyebrow">
              HANDPICKED FOR YOU
            </span>

            <h2>
              {activeCategory === 'All Events'
                ? 'Popular Event Packages'
                : `${activeCategory} Packages`}
            </h2>

            <p>
              Discover packages designed to make your event special.
            </p>
          </div>

          <span className="event-count">
            {filteredEvents.length} Packages
          </span>

        </div>

        {/* Event Cards */}

        {filteredEvents.length > 0 ? (

          <div className="events-grid">

            {filteredEvents.map((event) => (

              <article className="event-card" key={event.id}>

                {/* Event Image */}

                <div className="event-card-image">

                  <img
                    src={event.image}
                    alt={event.title}
                  />

                  <span className="event-category-badge">
                    {event.category}
                  </span>

                  {/* Favorite Button */}

                  <button
                    className={`favorite-btn ${
                      favorites.includes(event.id) ? 'favorited' : ''
                    }`}
                    onClick={() => toggleFavorite(event.id)}
                    aria-label={
                      favorites.includes(event.id)
                        ? 'Remove from favorites'
                        : 'Add to favorites'
                    }
                  >
                    <FiHeart />
                  </button>

                </div>

                {/* Event Information */}

                <div className="event-card-content">

                  <div className="event-card-title-row">

                    <h3>{event.title}</h3>

                    <span className="event-rating">
                      <FiStar />
                      {event.rating}
                    </span>

                  </div>

                  <p className="event-description">
                    {event.description}
                  </p>

                  {/* Event Details */}

                  <div className="event-card-meta">

                    <span>
                      <FiMapPin />
                      {event.location}
                    </span>

                    <span>
                      <FiCalendar />
                      {event.guests}
                    </span>

                  </div>

                  {/* Price and Add Button */}

                  <div className="event-card-footer">

                    <div className="event-price">

                      <small>Starting from</small>

                      <strong>
                        {formatPrice(event.price)}
                      </strong>

                    </div>

                    <button
                      className="details-btn"
                      onClick={() => handleAddEvent(event)}
                    >
                      + Add
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* No Events Found */

          <div className="no-events">

            <h3>No events available</h3>

            <p>
              There are currently no packages in this category.
            </p>

            <button
              onClick={() => setActiveCategory('All Events')}
            >
              View All Events
            </button>

          </div>

        )}

      </section>

    </div>
  );
}

export default Discover;
