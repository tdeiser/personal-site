// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex justify-center px-4">
      <div className="w-full max-w-3xl py-16 sm:py-24">
        {/* Top "logo"/name bar */}
        <header className="sticky top-0 z-40 mb-16 flex items-center justify-between gap-4 px-1 py-4 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-900">
          <div className="flex items-center gap-3">
            <img
              src="/signature_white.png"
              alt="Tommy Deiser signature"
              className="h-10 w-auto opacity-90"
            />
          </div>

          <nav className="hidden sm:flex gap-6 text-sm text-neutral-400">
            <a href="#about" className="hover:text-neutral-100 transition">
              About
            </a>
            <a href="#projects" className="hover:text-neutral-100 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-neutral-100 transition">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-16">
          <p className="text-sm text-neutral-400 mb-3">
            Software developer · NYC area
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50 mb-4">
            I build clean web apps and tinker with sports and finance data.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
            I work mainly with TypeScript, React, and backend APIs. Lately
            I&apos;ve been leaning into sports analytics and personal finance tools
            — small projects, real data, and trying to make the UI not ugly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-white transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:bg-neutral-900 transition"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-16">
          <h3 className="text-lg font-semibold text-neutral-100 mb-3">
            About
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            My name is Tommy, and I&apos;m a software developer who loves building things,
            solving problems, and figuring out how systems work. I graduated from Bergen
            Catholic High School (N.J.) in 2020 and the University of Notre Dame in 2024
            (go Irish!). I&apos;m a huge sports fan, especially baseball and football, and a
            lifelong diehard Yankees fan. I&apos;ve always been fascinated by
            sports analytics and believe the numbers behind the game can often tell a
            different story. I enjoy digging into that data to understand the deeper
            patterns, trends, and decisions that shape outcomes.
            <br />
            <br />
            I&apos;m also passionate about personal finance and investing, and I like digging
            into how markets move, what drives them, and how smart decisions compound over
            time. I naturally gravitate toward understanding the “why” behind things,
            whether it&apos;s code, data, or any choice that affects performance, efficiency,
            or results. Outside of tech, I lift, game, watch sports, and enjoy keeping
            consistent routines.
            <br />
            <br />
            At the end of the day, I&apos;m driven by curiosity, structure, and trying to get
            a little better every single day, whether that&apos;s learning something new,
            improving a skill, or just understanding the world a bit more clearly than I
            did yesterday.
          </p>
        </section>

        {/* Projects (placeholder for now) */}
        <section id="projects" className="mb-16">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            Projects
          </h3>
          <div className="space-y-4 text-sm text-neutral-400">
            <p className="text-neutral-500">
              Drop in 2–4 key projects here once you decide how you want this
              section laid out. Cards, a simple list, or a two-column layout all
              work well.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-100 mb-3">
            Contact
          </h3>
          <p className="text-sm text-neutral-400 mb-2">
            You can reach me at:
          </p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:thomas.p.deiser@gmail.com"
                className="font-medium text-neutral-100 hover:underline"
              >
                thomas.p.deiser@gmail.com
              </a>
            </li>

            <li>
              GitHub:{" "}
              <a
                href="https://github.com/tdeiser"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-100 hover:underline"
              >
                @tdeiser
              </a>
            </li>

            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/thomas-deiser-9b82a01ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-100 hover:underline"
              >
                in/Thomas-Deiser
              </a>
            </li>
          </ul>
        </section>


        <footer className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Tommy Deiser
        </footer>
      </div>
    </main>
  );
}
