'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setStatus('sent');
      form.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="p-3 border rounded"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="p-3 border rounded"
        />
        <textarea
          name="message"
          required
          placeholder="Your message"
          rows={6}
          className="p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'sent' && <p className="text-green-600">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-600">Something went wrong.</p>}
      </form>
    </main>
  );
}
