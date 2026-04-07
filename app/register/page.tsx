"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 text-center animate-in fade-in duration-500">
      <h2 className="text-4xl font-bold mb-6">Registration</h2>
      <p className="mb-8">Sign up to participate in upcoming events.</p>

      <section className="border rounded-lg p-6 max-w-3xl mx-auto bg-gray-50 mb-8">
        <h3 className="text-2xl font-semibold mb-3">Event Registration Form</h3>
        {status === "success" ? (
           <div className="p-4 bg-green-100 text-green-800 rounded-md">Registration received! Check your email for details.</div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Student Name</label>
                <input required type="text" className="mt-1 w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Parent Email</label>
                <input required type="email" className="mt-1 w-full p-2 border rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Event</label>
              <select required className="mt-1 w-full p-2 border rounded-md bg-white">
                <option value="">Choose an event...</option>
                <option value="ai">AI in Schools - May 24</option>
                <option value="robotics">Robotics Bootcamp - June 7</option>
              </select>
            </div>
            <button type="submit" disabled={status === "submitting"} className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
              {status === "submitting" ? "Registering..." : "Submit Registration"}
            </button>
          </form>
        )}
      </section>

      <section className="border rounded-lg p-6 max-w-3xl mx-auto bg-white mb-8">
        <h3 className="text-2xl font-semibold mb-3">Other Ways to Get Involved</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">Become a Volunteer</button>
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition">Become a Mentor</button>
        </div>
      </section>
    </div>
  );
}
