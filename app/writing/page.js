export default function WritingPage() {
  const pieces = [
    {
      title: "Happiness by Design",
      body: "My framework for building technology that centers the emotional reality of workers — not just efficiency metrics. Delivered at Columbia's HCM Talks.",
      tags: ["Talk", "Columbia", "2024"],
    },
    {
      title: "When Software Sees You",
      body: "What happens when we design enterprise tools as if the humans using them actually matter. An essay on dignity in software.",
      tags: ["Essay"],
    },
    {
      title: "Automotive News Feature",
      body: "Profiled as an emerging voice at the intersection of empathy-driven design and enterprise AI.",
      tags: ["Press", "December 2024"],
    },
    {
      title: "AI Unleashed — Tech Forum Panel",
      body: "On the most underrated AI skill: translation — knowing when a problem calls for AI, when it doesn't.",
      tags: ["Panel", "September 2024"],
    },
  ];

  return (
    <main>
      <header className="page-header">
        <span className="page-eyebrow">WORDS & IDEAS</span>
        <h1 className="page-title">Writing</h1>
      </header>

      <section className="section">
        <span className="section-label">ESSAYS & TALKS</span>

        {pieces.map((piece, i) => (
          <div className="editorial-row" key={piece.title}>
            <span className="editorial-row__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="editorial-row__content">
              <h2 className="editorial-row__title">{piece.title}</h2>
              <p className="editorial-row__body">{piece.body}</p>
              <div className="editorial-row__tags">
                {piece.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
