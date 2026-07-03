export default function Photography() {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <iframe
        src="/photography-site.html"
        title="Frazier Horn Photography"
        className="iframe-page"
        style={{ flex: 1 }}
      />
    </div>
  );
}
