'use client';
import { useEffect, useRef, useState } from 'react';

// ===== Feature 2: Bento-to-Accordion wrapper with state persistence =====
const FEATURES = [
  { title: 'Auto-Pipeline', body: 'Drag-and-drop pipeline builder that wires your data sources together with zero config.' },
  { title: 'Live Inference', body: 'Run AI models on streaming data in real time, with sub-100ms latency at the edge.' },
  { title: 'Edge Sync', body: 'Keep every region in sync automatically, with conflict resolution handled for you.' },
  { title: 'Smart Alerts', body: 'Get notified the moment a workflow drifts from expected behavior — before it breaks anything.' },
  { title: 'Version Control', body: 'Every workflow change is versioned and instantly revertible, like git for automation.' },
  { title: 'Audit Trail', body: 'Full compliance-ready logs for every action any workflow takes, automatically.' },
];

export default function BentoAccordion() {
  // shared context ref — updated on hover with zero re-renders
  const activeIndexRef = useRef(null);
  const [mode, setMode] = useState('bento');
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');

    function handle(e) {
      const goingMobile = e.matches;
      setMode(goingMobile ? 'accordion' : 'bento');
      if (goingMobile) {
        // CONTEXT LOCK: transfer whatever bento node was active at the moment
        // of resize into the accordion's open panel.
        setOpenIndex(activeIndexRef.current);
      }
    }

    handle(mq); // run once on mount to set correct initial mode
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  if (mode === 'bento') {
    return (
      <div className="bento-grid">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="bento-node"
            onMouseEnter={() => {
              activeIndexRef.current = i;
            }}
            onMouseLeave={() => {
              activeIndexRef.current = null;
            }}
          >
            <h4>{f.title}</h4>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="accordion">
      {FEATURES.map((f, i) => (
        <div key={f.title} className="accordion-item">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {f.title}
            <span>{openIndex === i ? '–' : '+'}</span>
          </button>
          <div
            className="accordion-panel"
            style={{ maxHeight: openIndex === i ? '300px' : '0px' }}
          >
            <div>{f.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
