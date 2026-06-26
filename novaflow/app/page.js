import Hero from '@/components/Hero';
import PricingMatrix from '@/components/PricingMatrix';
import BentoAccordion from '@/components/BentoAccordion';
import SocialProof from '@/components/SocialProof';

export default function Home() {
  return (
    <>
      <header role="banner">
        <nav aria-label="Primary navigation">
          <div className="logo">NovaFlow</div>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#social-proof">Customers</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" aria-label="Hero">
          <Hero />
        </section>

        <section id="features" aria-label="Platform features">
          <h2>Built for Scale</h2>
          <BentoAccordion />
        </section>

        <section id="pricing" aria-label="Pricing plans">
          <h2>Simple, Transparent Pricing</h2>
          <PricingMatrix />
        </section>

        <section id="social-proof" aria-label="Trusted by teams">
          <h2>Trusted by teams worldwide</h2>
          <SocialProof />
        </section>
      </main>

      <footer role="contentinfo">
        <p>© 2026 NovaFlow AI. All rights reserved.</p>
      </footer>
    </>
  );
}
