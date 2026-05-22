export default function Building() {
  return (
    <>
      <section className="section" style={{ paddingTop: '4rem' }}>
        <h2>Things I've Built</h2>
        <p>
          I've been writing code since freshman year of college and haven't
          stopped. Here's a selection — from AI and systems to full-stack web
          apps to mobile.
        </p>

        <div className="card">
          <h3>ServiceSync AI</h3>
          <p>
            Intelligence infrastructure for automotive service departments.
            Data pipelines, knowledge bases, customer bots, dashboards.
          </p>
          <p className="meta">Python, TypeScript, AWS, Supabase</p>
        </div>

        <div className="card">
          <h3>Screenpipe Plugins</h3>
          <p>
            AI plugins for real-time screen and audio processing — meeting
            summarizer, Notion sync, automated Reddit posting.
          </p>
          <p className="meta">Next.js, TypeScript, OpenAI</p>
        </div>

        <div className="card">
          <h3>LangChain Ingestion Pipeline</h3>
          <p>
            Document processing pipeline with intelligent chunking, vector
            embedding, and storage for AI/ML applications.
          </p>
          <p className="meta">Python, LangChain, Pinecone</p>
        </div>

        <div className="card">
          <h3>B+ Tree</h3>
          <p>
            Complete B+ tree data structure implementation. Insertion, search,
            and range queries with internal/leaf node separation.
          </p>
          <p className="meta">C++</p>
        </div>

        <div className="card">
          <h3>Eight Puzzle Solver</h3>
          <p>
            State-space search algorithms — BFS, DFS, Greedy Best-First, and
            A* — solving the classic Eight Puzzle.
          </p>
          <p className="meta">Python</p>
        </div>

        <div className="card">
          <h3>Reliable Data Transfer Protocol</h3>
          <p>
            Network protocol implementation over a simulated lossy channel.
            Handles ACKs, timeouts, retransmissions, sequence numbers.
          </p>
          <p className="meta">Java</p>
        </div>

        <div className="card">
          <h3>Full-Stack Web Applications</h3>
          <p>
            REST APIs, Redis caching, Angular SPAs, Express servers, Yelp
            integration, unit testing with Mocha.
          </p>
          <p className="meta">Node.js, Express, Angular, Redis</p>
        </div>

        <div className="card">
          <h3>Android Apps</h3>
          <p>
            Mood tracker with speech-to-text, journal app with persistent
            storage, various UI experiments.
          </p>
          <p className="meta">Java, Kotlin, Android SDK</p>
        </div>

        <p style={{ marginTop: '2rem' }}>
          <a href="https://github.com/fhorn97">See everything on GitHub →</a>
        </p>
      </section>
    </>
  );
}
