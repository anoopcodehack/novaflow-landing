export default function Hero() {
  return (
    <div className="hero-wrap">
      <img
        src="/assets/svg/logo-mark.svg"
        alt="NovaFlow logo mark"
        width={64}
        height={64}
        className="entry-anim"
        style={{ display: 'inline-block', '--delay': '0ms' }}
      />
      <h1 className="entry-anim" style={{ '--delay': '80ms' }}>
        Automate Everything. Instantly.
      </h1>
      <p className="entry-anim" style={{ '--delay': '160ms' }}>
        NovaFlow turns your messy data pipelines into self-running AI workflows —
        no engineering team required.
      </p>
      <a href="#pricing" className="entry-anim" style={{ '--delay': '240ms' }}>
        <span className="cta-btn">Get Started Free</span>
      </a>
    </div>
  );
}
