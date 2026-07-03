export default function Resume() {
  return (
    <div className="section">
      <div className="page-header">
        <p className="page-eyebrow">EXPERIENCE</p>
        <h1 className="page-title">Resume</h1>
      </div>

      <div style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
        <a href="/resume.docx" download className="pill-btn">
          Download PDF →
        </a>
      </div>

      <iframe
        src="/resume.html"
        title="Resume"
        className="resume-frame"
      />
    </div>
  );
}
