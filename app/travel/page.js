export default function Travel() {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <iframe
        src="/travel.html"
        title="Where I've Been"
        className="iframe-page"
        style={{ flex: 1 }}
      />
    </div>
  );
}
