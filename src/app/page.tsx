const linkClass =
  "underline underline-offset-4 hover:underline-offset-[6px] hover:opacity-60 transition-all focus-visible:outline-none focus-visible:decoration-2 dark:text-white";

export default function Home() {
  return (
    <main className="stagger flex flex-col max-w-2xl text-neutral-900 dark:text-neutral-200 tracking-tighter lg:text-2xl text-lg lg:pt-12 lg:pl-16 pt-12 p-4 gap-5 lg:gap-8">
      <div className="flex flex-col gap-1.5">
        <h1>Anton Sukhorada</h1>
        <p>senior software engineer</p>
      </div>
      <p>
        with 7 years of experience, i've built and shipped software in corporations, startups, and as an entrepreneur.
      </p>
      <div className="flex flex-col gap-1">
        <p>currently i'm working as senior full-stack engineer</p>
        <p>and living in Kyiv.</p>
      </div>
      <p>
        i'm also building{" "}
        <a
          className={linkClass}
          href="https://www.joinsona.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sona app"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            className="inline-block w-[0.9em] h-[0.9em] rounded-[0.2em] align-[-0.1em] mr-1"
            aria-hidden="true"
          >
            <rect width="120" height="120" rx="28" fill="#F0EEE6" />
            <circle cx="60" cy="60" r="48" fill="#D97757" opacity="0.12" />
            <path d="M 22 74 Q 60 30 98 74" stroke="#D97757" strokeWidth="7" fill="none" strokeLinecap="round" />
          </svg>
          sona
        </a>{" "}
        - a quiet space for when your mind is loud.
      </p>
      <ul className="flex flex-col gap-2 lg:gap-3 list-none">
        <li>
          i share my life on{" "}
          <a
            className={linkClass}
            href="https://instagram.com/asukhorada"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Anton on Instagram"
          >
            instagram
          </a>
          .
        </li>
        <li>
          business enquiries on{" "}
          <a
            className={linkClass}
            href="https://linkedin.com/in/sukhorada-anton/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Anton on LinkedIn"
          >
            linkedin
          </a>
          .
        </li>
        <li>
          my work can be found on{" "}
          <a
            className={linkClass}
            href="https://github.com/AntonSukhoradaDA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Anton on GitHub"
          >
            github
          </a>
          .
        </li>
        <li>
          contact me at{" "}
          <a className={linkClass} href="mailto:antonsukhorada@gmail.com" aria-label="Email Anton">
            antonsukhorada@gmail.com
          </a>
          .
        </li>
      </ul>
      <div className="flex flex-col gap-1">
        <p>cheers,</p>
        <p>Anton</p>
      </div>
    </main>
  );
}
