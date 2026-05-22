export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Hey, I'm Frazier.</h1>
        <p className="tagline">
          I build things that make people's lives better.
        </p>
        <p className="intro">
          Right now I'm building intelligence infrastructure for service
          industries. But I'm also a photographer, a perpetual student, and
          someone who believes empathy is a design principle — not a soft skill.
        </p>
      </section>

      <section className="section">
        <h2>Now</h2>
        <div className="card">
          <h3>Stratus / ServiceSync AI</h3>
          <p>
            AI-driven decision layer for automotive fixed operations. Turning
            service department chaos into structured, actionable intelligence.
          </p>
          <p className="meta">
            HornHaus Technologies, Inc. — Raising pre-seed.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Background</h2>
        <div className="timeline-item">
          <span className="year">2024</span>
          <div>
            <h3>Columbia University</h3>
            <p>M.S. Technology Management</p>
            <p className="meta">
              Graduation speaker. HCM Talks presenter. Startup used as case
              study.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="year">2021</span>
          <div>
            <h3>Boston University</h3>
            <p>B.A. Computer Science & Economics</p>
            <p className="meta">
              Spark! Innovation Fellowship. Built across Python, Java, C++,
              JavaScript, SQL, Kotlin.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="year">Always</span>
          <div>
            <h3>Third-generation automotive</h3>
            <p>
              Grew up watching my father navigate broken systems. The service
              department was always chaotic — not because of the people, but
              because of the tools.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>I care about</h2>
        <p>
          Photography — architecture, travel, and moments most people walk past.
        </p>
        <p>
          Building things — from AI search algorithms to full-stack apps to the
          company I'm running now.
        </p>
        <p>
          Doing things for others — the service advisors and technicians I build
          for are the backbone of a $157B industry, and they've been forgotten
          by enterprise software for thirty years.
        </p>
        <p>
          Happiness by Design — my framework for building technology that
          centers the emotional reality of the people who use it.
        </p>
      </section>

      <footer>
        <div>
          <a href="https://github.com/fhorn97">GitHub</a>
          <a href="https://linkedin.com/in/frazierhorn">LinkedIn</a>
          <a href="https://servicesync.io">ServiceSync AI</a>
        </div>
        <span>Frazier Horn — 2026</span>
      </footer>
    </>
  );
}
