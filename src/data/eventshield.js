
export const milestones = [
  {
    id: 1,
    title: 'Booking confirmed',
    percentage: 20,
    description: 'Your date is locked in'
  },
  {
    id: 2,
    title: 'Materials sourced',
    percentage: 30,
    description: 'Released when invoices are uploaded · 24h before'
  },
  {
    id: 3,
    title: 'Venue check-in',
    percentage: 30,
    description: 'Released with GPS check-in · 4h before'
  },
  {
    id: 4,
    title: "You're satisfied",
    percentage: 20,
    description: 'Final release only when you say so'
  }
];

export const protectionPlans = [
  {
    id: 'standard',
    name: 'EventShield Standard',
    rate: '10%',
    price: 'Free with every booking',
    description: 'Essential protection for every celebration.',
    features: [
      'Protected escrow milestones',
      'Verified local vendors',
      'Event-day SOS support',
      '10% rollover passport credits'
    ]
  },
  {
    id: 'gold',
    name: 'EventShield Gold',
    rate: '15%',
    price: '₹2,999 / event',
    description: 'Premium protection and priority assistance.',
    features: [
      'Everything in Standard',
      'Your own on-site event supervisor',
      'Priority 24/7 event support',
      '15% rollover passport credits'
    ]
  }
];
