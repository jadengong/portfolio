export default function ResumePage() {
  const resumeFile = '/jadenOng-resume.pdf';

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
            Resume
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
            PDF
          </h1>
          <div className="mt-6 section-rule" />
        </header>

        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03]">
          <iframe
            src={resumeFile}
            title="Software Engineering Resume PDF"
            className="w-full h-[80vh]"
          />
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={resumeFile}
            download="jadenOng-resume.pdf"
            className="quiet-focus inline-flex items-center px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 text-gray-950 dark:text-gray-50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            Download PDF
          </a>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="quiet-focus inline-flex items-center px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 text-gray-950 dark:text-gray-50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            Open in new tab
          </a>
        </div>
      </div>
    </div>
  );
}


