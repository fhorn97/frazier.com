export default function Travel() {
  return (
    <div style={{ width: '100%', height: '100vh', paddingTop: '5rem', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      <iframe
        src="/travel.html"
        title="Where I've Been"
        className="iframe-page"
        style={{ flex: 1, minHeight: 0 }}
      />
    </div>
  );
}
