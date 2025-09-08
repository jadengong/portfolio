export default function ResumePage() {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Resume</h1>
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            className="w-full h-[80vh]"
          />
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition"
          >
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Open in new tab
          </a>
        </div>
      </div>
    </div>
  );
}


