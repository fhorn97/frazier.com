import './globals.css';

export const metadata = {
  title: 'Frazier Horn',
  description: 'Founder. Builder. Photographer. Perpetually curious.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/" className="nav-name">Frazier Horn</a>
          <div className="nav-links">
            <a href="/building">Building</a>
            <a href="/photography">Photography</a>
            <a href="/travel">Travel</a>
            <a href="/writing">Writing</a>
            <a href="/resume">Resume</a>
            <a href="https://github.com/fhorn97" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/frazierhorn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
