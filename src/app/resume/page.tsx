'use client';

import { useState } from 'react';

export default function ResumePage() {
  const [resumeType, setResumeType] = useState<'swe' | 'it'>('swe');
  
  const resumeFiles = {
    swe: '/resume-swe.pdf',
    it: '/resume-it.pdf'
  };

  const currentResume = resumeFiles[resumeType];

  return (
    <div className="min-h-screen pt-20 pb-10 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">Resume</h1>
          
          {/* Resume Type Selector */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setResumeType('swe')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                resumeType === 'swe'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Software Engineering
            </button>
            <button
              onClick={() => setResumeType('it')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                resumeType === 'it'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              IT Systems Engineering
            </button>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <iframe
            src={currentResume}
            title={`${resumeType === 'swe' ? 'Software Engineering' : 'IT Systems Engineering'} Resume PDF`}
            className="w-full h-[80vh]"
          />
        </div>
        
        <div className="mt-4 flex gap-3">
          <a
            href={currentResume}
            download={`jaden-ong-resume-${resumeType}.pdf`}
            className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition"
          >
            Download PDF
          </a>
          <a
            href={currentResume}
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


