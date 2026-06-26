'use client';
import { useRef, useEffect } from 'react';

// ===== Feature 1: multi-dimensional pricing matrix =====
// base = monthly base rate in INR (your "home" currency)
// tariff = regional conversion variables per currency
const MATRIX = {
  starter: {
    base: 999,
    tariff: { INR: 1, USD: 0.014, EUR: 0.013 },
    features: ['5 workflows', '10k tasks/mo', 'Email support'],
  },
  pro: {
    base: 2499,
    tariff: { INR: 1, USD: 0.013, EUR: 0.012 },
    features: ['50 workflows', '250k tasks/mo', 'Priority support', 'Custom integrations'],
  },
  scale: {
    base: 5999,
    tariff: { INR: 1, USD: 0.012, EUR: 0.011 },
    features: ['Unlimited workflows', 'Unlimited tasks', 'Dedicated success manager', 'SLA guarantee'],
  },
};

const SYMBOL = { INR: '₹', USD: '$', EUR: '€' };
const ANNUAL_DISCOUNT = 0.8; // flat 20% off when billed annually

export default function PricingMatrix() {
  // refs hold the live DOM nodes we mutate directly — never via setState
  const priceRefs = useRef({});
  const stateRef = useRef({ cycle: 'monthly', currency: 'INR' });

  function compute(tierKey) {
    const { base, tariff } = MATRIX[tierKey];
    const { cycle, currency } = stateRef.current;
    let val = base * tariff[currency];
    if (cycle === 'annual') val = val * 12 * ANNUAL_DISCOUNT;
    const suffix = cycle === 'annual' ? '/yr' : '/mo';
    return `${SYMBOL[currency]}${val.toFixed(0)}${suffix}`;
  }

  function paintAll() {
    Object.keys(MATRIX).forEach((tierKey) => {
      const el = priceRefs.current[tierKey];
      if (el) el.textContent = compute(tierKey); // direct text-node mutation only
    });
  }

  function setCycle(cycle) {
    stateRef.current.cycle = cycle;
    document.querySelectorAll('[data-cycle-btn]').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-cycle-btn') === cycle);
    });
    paintAll();
  }

  function setCurrency(e) {
    stateRef.current.currency = e.target.value;
    paintAll();
  }

  useEffect(() => {
    paintAll(); // initial paint after mount
  }, []);

  return (
    <div>
      <div className="pricing-controls">
        <div className="cycle-toggle" role="group" aria-label="Billing cycle">
          <button data-cycle-btn="monthly" className="active" onClick={() => setCycle('monthly')}>
            Monthly
          </button>
          <button data-cycle-btn="annual" onClick={() => setCycle('annual')}>
            Annual <span style={{ opacity: 0.7 }}>(-20%)</span>
          </button>
        </div>

        <select className="currency-select" onChange={setCurrency} defaultValue="INR" aria-label="Currency">
          <option value="INR">INR ₹</option>
          <option value="USD">USD $</option>
          <option value="EUR">EUR €</option>
        </select>
      </div>

      <div className="pricing-grid">
        {Object.entries(MATRIX).map(([tierKey, tier], i) => (
          <article key={tierKey} className={`pricing-card ${i === 1 ? 'featured' : ''}`}>
            <h3>{tierKey}</h3>
            <span
              className="price-text"
              ref={(el) => {
                priceRefs.current[tierKey] = el;
              }}
            />
            <ul>
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="#" className="cta-btn" style={{ width: '100%' }}>
              Choose {tierKey}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
