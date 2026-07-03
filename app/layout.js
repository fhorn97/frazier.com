import './globals.css';
import Script from 'next/script';
import Link from 'next/link';

export const metadata = {
  title: 'Frazier Horn',
  description: 'Developer, photographer, and creative — personal portfolio and journal.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Space+Grotesk:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Navigation */}
        <nav>
          <Link href="/" className="logo__mark" aria-label="Home">
            FH
          </Link>
          <div className="nav-center">
            <Link href="/building">building</Link>
            <Link href="/photography">photography</Link>
            <Link href="/travel">travel</Link>
            <Link href="/writing">writing</Link>
            <Link href="/resume">resume</Link>
          </div>
          <button className="menu-btn" aria-label="Menu">menu</button>
        </nav>

        {/* Page Content */}
        {children}

        {/* Film Grain Overlay */}
        <div className="grain" aria-hidden="true"></div>

        {/* Custom Cursor */}
        <div className="cursor" id="cursor" aria-hidden="true"></div>
        <div className="cursor-ring" id="cursorRing" aria-hidden="true"></div>

        {/* GSAP */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />

        {/* Cursor Logic */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const cur = document.getElementById('cursor');
                const ring = document.getElementById('cursorRing');
                if (cur && ring) {
                  document.addEventListener('mousemove', function(e) {
                    cur.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
                    ring.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
                  });
                  document.querySelectorAll('a, button').forEach(function(el) {
                    el.addEventListener('mouseenter', function() { ring.classList.add('is-hover'); });
                    el.addEventListener('mouseleave', function() { ring.classList.remove('is-hover'); });
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
