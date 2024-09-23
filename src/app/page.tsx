// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="row-start-1 w-full flex justify-center">
        <Image
          src="/favicon.ico" // Replace with your logo path
          alt="Your Logo"
          width={180}
          height={38}
          priority
        />
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to My Self-Hosted Website
        </h1>
        <p className="text-lg text-center sm:text-left max-w-2xl">
          This website is self-hosted using <strong>k3s Kubernetes</strong> and follows best practices in <strong>DevOps</strong>. Explore my projects and learn more about my journey in cloud computing and automation.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center"
            href="/projects"
          >
            View My Projects
          </a>
          <a
            className="rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center"
            href="/about"
          >
            About Me
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-600 dark:text-gray-400">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://github.com/yuvalmaor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/github.svg" // Replace with your GitHub icon path
            alt="GitHub icon"
            width={20}
            height={20}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://www.linkedin.com/in/yuval-maor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/linkedin.svg" // Replace with your LinkedIn icon path
            alt="LinkedIn icon"
            width={20}
            height={20}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="/contact"
        >
          <Image
            src="/icons/mail.svg" // Replace with your Email icon path
            alt="Email icon"
            width={20}
            height={20}
          />
          Contact
        </a>
      </footer>
    </div>
  );
}
