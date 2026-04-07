'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send message');
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setErrorMessage(message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "ong.jadengabriel@gmail.com",
      link: "mailto:ong.jadengabriel@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "San Diego, CA",
      link: null
    }
    
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl">
          <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
            Get in touch
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose">
            If you want to talk about an internship, a project, or just say hi, send a note here.
          </p>
          <div className="mt-6 section-rule" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-black/10 dark:border-white/10">
            <h3 className="text-lg font-medium text-gray-950 dark:text-gray-50 mb-6 tracking-tight">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="quiet-focus w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="quiet-focus w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="quiet-focus w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="quiet-focus w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 border border-black/10 dark:border-white/10 rounded-lg bg-black/[0.02] dark:bg-white/[0.03]">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-950 dark:text-gray-50 font-medium">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 border border-black/10 dark:border-white/10 rounded-lg bg-black/[0.02] dark:bg-white/[0.03]">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-950 dark:text-gray-50 font-medium">
                      Error: {errorMessage || 'Failed to send message. Please try again.'}
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="quiet-focus w-full border border-black/10 dark:border-white/10 text-gray-950 dark:text-gray-50 py-3 px-6 rounded-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-950 dark:text-gray-50 mb-6 tracking-tight">
                Contact Information
              </h3>
              
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-950 dark:text-gray-50">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-950 dark:text-gray-50">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="quiet-focus text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-gray-50 underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black/40 dark:hover:decoration-white/40 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-950 dark:text-gray-50 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jadengong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quiet-focus w-10 h-10 border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-950 dark:text-gray-50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a
                  href="https://linkedin.com/in/jadengong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quiet-focus w-10 h-10 border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-950 dark:text-gray-50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
