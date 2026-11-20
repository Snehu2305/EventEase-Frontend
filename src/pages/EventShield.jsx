
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FiArrowLeft,
  FiArrowRight,
  FiShield,
  FiLock,
  FiAward,
  FiClock,
  FiCheck,
  FiCheckCircle,
  FiStar,
  FiCreditCard,
  FiAlertCircle,
  FiChevronRight
} from 'react-icons/fi';

import {
  milestones,
  protectionPlans
} from '../data/eventshield.js';

import '../styles/eventshield.css';

function EventShield() {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState('gold');

  const totalProtected = 184000;
  const releasedAmount = 92000;
  const protectedAmount = totalProtected - releasedAmount;
  const progress = (releasedAmount / totalProtected) * 100;

  const formatPrice = (amount) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);

  return (
    <div className="eventshield-page">

      {/* Back Navigation */}
      <button
        className="eventshield-back"
        onClick={() => navigate('/my-bookings')}
      >
        <FiArrowLeft />
        Back to your event
      </button>

      {/* Hero Banner */}
      <section className="shield-hero">
        <div className="shield-hero-content">
          <span className="shield-eyebrow">
            YOUR EVENT SAFETY NET
          </span>

          <h1>
            Peace of mind
            <br />
            comes <span>included.</span>
          </h1>

          <p>
            More than a promise. Every payment, vendor and milestone
            is protected from booking to the last dance.
          </p>
        </div>

        <div className="shield-protected-total">
          <div className="shield-total-icon">
            <FiShield />
          </div>
          <h2>₹1.2 Cr+</h2>
          <span>in event payments protected</span>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="shield-trust-row">
        <div className="shield-trust-item">
          <FiLock />
          <div>
            <h3>100%</h3>
            <p>Payments secured in escrow</p>
          </div>
        </div>

        <div className="shield-trust-item">
          <FiAward />
          <div>
            <h3>Verified</h3>
            <p>Every pro checked before booking</p>
          </div>
        </div>

        <div className="shield-trust-item">
          <FiClock />
          <div>
            <h3>24 / 7</h3>
            <p>Event-day support, right here</p>
          </div>
        </div>
      </section>

      {/* Milestone Section */}
      <section className="shield-milestone-section">
        <div className="shield-milestone-intro">
          <span className="shield-section-eyebrow">
            EVERY RELEASE IS EARNED
          </span>

          <h2>Four steps. No surprises.</h2>

          <p>
            Your money only moves when the work is verified.
            You stay in control.
          </p>
        </div>

        <div className="shield-milestone-card">
          {milestones.map((milestone) => (
            <div className="shield-milestone" key={milestone.id}>
              <div className="milestone-number">
                {String(milestone.id).padStart(2, '0')}
              </div>

              <div className="milestone-information">
                <h4>{milestone.title}</h4>
                <p>
                  {milestone.percentage}% released · {milestone.description}
                </p>
              </div>

              <FiCheckCircle className="milestone-check" />
            </div>
          ))}
        </div>
      </section>

      {/* Protection Plans */}
      <section className="shield-plans-section">
        <div className="shield-plans-heading">
          <span className="shield-section-eyebrow">
            A LITTLE MORE LOVE BACK
          </span>

          <h2>Choose your EventShield.</h2>

          <p>
            Earn passport credits on every celebration.
            Use them when the next one comes around.
          </p>
        </div>

        <div className="shield-plans-grid">
          {protectionPlans.map((plan) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <article
                className={`shield-plan-card ${
                  isSelected ? 'selected' : ''
                }`}
                key={plan.id}
              >
                <div className="shield-plan-top">
                  <div className="shield-plan-name">
                    {plan.id === 'gold' ? <FiStar /> : <FiShield />}
                    <span>{plan.name}</span>
                  </div>

                  {isSelected && (
                    <span className="current-plan-label">
                      YOUR CURRENT PLAN
                    </span>
                  )}
                </div>

                <div className="shield-plan-rate">
                  <strong>{plan.rate}</strong>
                  <span>passport credits</span>
                </div>

                <p className="shield-plan-price">{plan.price}</p>

                <div className="shield-plan-divider"></div>

                <ul className="shield-plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <FiCheck />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`shield-plan-button ${
                    isSelected ? 'selected-button' : ''
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                  disabled={isSelected}
                >
                  {isSelected ? (
                    <>
                      <FiCheck /> Selected
                    </>
                  ) : (
                    `Choose ${plan.id === 'gold' ? 'Gold' : 'Standard'}`
                  )}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Passport Credits */}
      <section className="shield-credits-card">
        <div className="shield-credits-icon">
          <FiCreditCard />
        </div>

        <div className="shield-credits-info">
          <span>YOUR PASSPORT CREDITS</span>
          <h2>₹12,600 <small>ready to use</small></h2>
          <p>
            Earn credits today. Roll them over for your next big day.
          </p>
        </div>

        <button
          className="shield-credit-history"
          onClick={() => alert('Credit history will be available soon.')}
        >
          Credit history
          <span>Expires in 12 months</span>
        </button>
      </section>

      {/* Help Section */}
      <button
        className="shield-help-link"
        onClick={() => alert('EventShield support will be available soon.')}
      >
        <FiAlertCircle />
        Need help with payment protection?
        <FiArrowRight />
      </button>

    </div>
  );
}

export default EventShield;
