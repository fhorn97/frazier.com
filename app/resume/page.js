export default function Resume() {
  return (
    <>
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Resume</h2>
          <a href="/resume.docx" download style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Download →</a>
        </div>
        <iframe
          src="/resume.html"
          title="Frazier Horn Resume"
          style={{ width: '100%', height: '80vh', border: '1px solid var(--border)', borderRadius: '4px' }}
        />
      </section>
    </>
  );
}
