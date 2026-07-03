export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero__eyebrow">founder — builder — photographer</p>
        <h1 className="hero__name">FRAZIER HORN</h1>
        <p className="hero__tagline">
          I build things that make people's lives better. Right now I'm building
          intelligence infrastructure for service industries — but I'm also a
          photographer, a perpetual student, and someone who believes empathy is
          a design principle, not a soft skill.
        </p>
        <span className="hero__scroll">( scroll )</span>
      </section>

      <section className="section">
        <span className="section-label">NOW</span>
        <div className="editorial-row">
          <span className="editorial-row__index">01</span>
          <div className="editorial-row__content">
            <h3 className="editorial-row__title">Stratus / ServiceSync AI</h3>
            <p className="editorial-row__body">
              AI-driven decision layer for automotive fixed operations. Turning
              service department chaos into structured, actionable intelligence.
            </p>
            <div className="editorial-row__tags">
              <span className="tag">AI</span>
              <span className="tag">Automotive</span>
              <span className="tag">Pre-seed</span>
            </div>
            <p className="editorial-row__meta">HornHaus Technologies, Inc.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="section-label">BACKGROUND</span>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-item__year">2024</span>
            <div className="timeline-item__content">
              <h3>Columbia University</h3>
              <p>M.S. Technology Management</p>
              <p className="meta">
                Graduation speaker. HCM Talks presenter. Startup used as case
                study.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-item__year">2021</span>
            <div className="timeline-item__content">
              <h3>Boston University</h3>
              <p>B.A. Computer Science &amp; Economics</p>
              <p className="meta">Spark! Innovation Fellowship.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-item__year">Always</span>
            <div className="timeline-item__content">
              <h3>Third-generation automotive</h3>
              <p>
                Grew up watching my father navigate broken systems. The service
                department was always chaotic — not because of the people, but
                because of the tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="section-label">INTERESTS</span>
        <div className="interests-grid">
          <div className="interest-item">
            <h3 className="interest-item__title">Photography</h3>
            <p className="interest-item__description">
              Architecture, travel, and moments most people walk past.
            </p>
          </div>
          <div className="interest-item">
            <h3 className="interest-item__title">Building Things</h3>
            <p className="interest-item__description">
              From AI search algorithms to full-stack apps to the company I'm
              running now.
            </p>
          </div>
          <div className="interest-item">
            <h3 className="interest-item__title">Doing Things for Others</h3>
            <p className="interest-item__description">
              The service advisors and technicians forgotten by enterprise
              software for thirty years.
            </p>
          </div>
          <div className="interest-item">
            <h3 className="interest-item__title">Happiness by Design</h3>
            <p className="interest-item__description">
              Building technology that centers the emotional reality of the
              people who use it.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__links">
          <a href="https://github.com/fhorn97" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/frazierhorn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://servicesync.io" target="_blank" rel="noopener noreferrer">ServiceSync AI</a>
        </div>
        <span className="footer__copy">Frazier Horn — 2026</span>
      </footer>
    </>
  );
}
