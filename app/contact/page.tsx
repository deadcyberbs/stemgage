"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 text-center animate-in fade-in duration-500">
      <h2 className="text-4xl font-bold mb-6">Contact Us / Feedback</h2>
      <p className="mb-8">Get in touch with our team or provide feedback.</p>
      
      <section className="border rounded-lg p-6 max-w-3xl mx-auto bg-gray-50 mb-12">
        <h3 className="text-2xl font-semibold mb-3">Send us a message</h3>
        {status === "success" ? (
          <div className="p-4 bg-green-100 text-green-800 rounded-md">Thanks! We'll get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required type="text" className="mt-1 w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" className="mt-1 w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea required rows={4} className="mt-1 w-full p-2 border rounded-md"></textarea>
            </div>
            <button disabled={status === "submitting"} type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </section>

      <section className="max-w-3xl mx-auto">
        <div className="border rounded-lg p-6 bg-white mb-6 text-left">
          <h4 className="text-xl font-semibold mb-3">Direct Contact</h4>
          <p className="text-gray-700"><strong>Main Email:</strong> <a href="mailto:hello@stemgage.org" className="text-blue-600">hello@stemgage.org</a></p>
        </div>
      </section>
    </div>
  );
}
