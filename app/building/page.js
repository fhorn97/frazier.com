export default function BuildingPage() {
  const projects = [
    {
      title: "ServiceSync AI",
      body: "Intelligence infrastructure for automotive service departments. Data pipelines, knowledge bases, customer bots, dashboards.",
      tags: ["Python", "TypeScript", "AWS", "Supabase"],
    },
    {
      title: "Screenpipe Plugins",
      body: "AI plugins for real-time screen and audio processing — meeting summarizer, Notion sync, automated Reddit posting.",
      tags: ["Next.js", "TypeScript", "OpenAI"],
    },
    {
      title: "LangChain Ingestion Pipeline",
      body: "Document processing pipeline with intelligent chunking, vector embedding, and storage for AI/ML applications.",
      tags: ["Python", "LangChain", "Pinecone"],
    },
    {
      title: "B+ Tree",
      body: "Complete B+ tree data structure implementation. Insertion, search, and range queries with internal/leaf node separation.",
      tags: ["C++"],
    },
    {
      title: "Eight Puzzle Solver",
      body: "State-space search algorithms — BFS, DFS, Greedy Best-First, and A*.",
      tags: ["Python"],
    },
    {
      title: "Reliable Data Transfer Protocol",
      body: "Network protocol over a simulated lossy channel. Handles ACKs, timeouts, retransmissions, sequence numbers.",
      tags: ["Java"],
    },
    {
      title: "Full-Stack Web Applications",
      body: "REST APIs, Redis caching, Angular SPAs, Express servers, Yelp integration.",
      tags: ["Node.js", "Express", "Angular", "Redis"],
    },
    {
      title: "Android Apps",
      body: "Mood tracker with speech-to-text, journal app with persistent storage.",
      tags: ["Java", "Kotlin", "Android SDK"],
    },
  ];

  return (
    <main>
      <header className="page-header">
        <span className="page-eyebrow">SELECTED WORK</span>
        <h1 className="page-title">Building</h1>
        <p className="page-header__intro">
          Writing code since freshman year of college and haven&apos;t stopped.
        </p>
      </header>

      <section className="section">
        <span className="section-label">PROJECTS</span>

        {projects.map((project, i) => (
          <div className="editorial-row" key={project.title}>
            <span className="editorial-row__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="editorial-row__content">
              <h2 className="editorial-row__title">{project.title}</h2>
              <p className="editorial-row__body">{project.body}</p>
              <div className="editorial-row__tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="section">
        <a
          href="https://github.com/frazierhorn"
          target="_blank"
          rel="noopener noreferrer"
          className="page-footer-link"
        >
          View more on GitHub →
        </a>
      </footer>
    </main>
  );
}
