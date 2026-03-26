"use client";
import { useState, useEffect, useRef } from "react";
import TabNavi from "./tabnavi";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isContentFading, setIsContentFading] = useState(false);
  const [isPodiumFading, setIsPodiumFading] = useState(false);
  const [currentPodium, setCurrentPodium] = useState(0);
  const podiumTimeoutRef = useRef<number | null>(null);

  const [portfolioIndexA, setPortfolioIndexA] = useState(0);
  const [portfolioIndexB, setPortfolioIndexB] = useState(0);

  const podiumData = [
    {
      date: "March 15, 2026",
      first: { name: "Placeholder Name", score: 950 },
      second: { name: "Placeholder Name", score: 920 },
      third: { name: "Placeholder Name", score: 890 }
    },
    {
      date: "March 8, 2026",
      first: { name: "Placeholder Name", score: 980 },
      second: { name: "Placeholder Name", score: 940 },
      third: { name: "Placeholder Name", score: 910 }
    },
    {
      date: "March 1, 2026",
      first: { name: "Placeholder Name", score: 960 },
      second: { name: "Placeholder Name", score: 930 },
      third: { name: "Placeholder Name", score: 900 }
    },
    {
      date: "February 22, 2026",
      first: { name: "Placeholder Name", score: 970 },
      second: { name: "Placeholder Name", score: 950 },
      third: { name: "Placeholder Name", score: 920 }
    },
    {
      date: "February 15, 2026",
      first: { name: "Placeholder Name", score: 990 },
      second: { name: "Placeholder Name", score: 960 },
      third: { name: "Placeholder Name", score: 930 }
    },
    {
      date: "February 8, 2026",
      first: { name: "Placeholder Name", score: 940 },
      second: { name: "Placeholder Name", score: 910 },
      third: { name: "Placeholder Name", score: 880 }
    },
    {
      date: "February 1, 2026",
      first: { name: "Placeholder Name", score: 970 },
      second: { name: "Placeholder Name", score: 940 },
      third: { name: "Placeholder Name", score: 910 }
    },
    {
      date: "January 25, 2026",
      first: { name: "Placeholder Name", score: 950 },
      second: { name: "Placeholder Name", score: 920 },
      third: { name: "Placeholder Name", score: 890 }
    },
    {
      date: "January 18, 2026",
      first: { name: "Placeholder Name", score: 980 },
      second: { name: "Placeholder Name", score: 950 },
      third: { name: "Placeholder Name", score: 920 }
    },
    {
      date: "January 11, 2026",
      first: { name: "Placeholder Name", score: 960 },
      second: { name: "Placeholder Name", score: 930 },
      third: { name: "Placeholder Name", score: 900 }
    }
  ];

  const changePodiumIndex = (nextIndex: number) => {
    if (podiumTimeoutRef.current) {
      window.clearTimeout(podiumTimeoutRef.current);
    }

    setIsPodiumFading(true);

    podiumTimeoutRef.current = window.setTimeout(() => {
      setCurrentPodium(nextIndex);
      setIsPodiumFading(false);
      podiumTimeoutRef.current = null;
    }, 250);
  };

  const handlePrevPodium = () => {
    const nextIndex = currentPodium === 0 ? podiumData.length - 1 : currentPodium - 1;
    changePodiumIndex(nextIndex);
  };

  const handleNextPodium = () => {
    const nextIndex = currentPodium === podiumData.length - 1 ? 0 : currentPodium + 1;
    changePodiumIndex(nextIndex);
  };

  const cycleIndex = (current: number, delta: number) => {
    const len = portfolioImages.length;
    return (current + delta + len) % len;
  };

  const prevPortfolioA = () => setPortfolioIndexA((cur) => cycleIndex(cur, -1));
  const nextPortfolioA = () => setPortfolioIndexA((cur) => cycleIndex(cur, 1));
  const prevPortfolioB = () => setPortfolioIndexB((cur) => cycleIndex(cur, -1));
  const nextPortfolioB = () => setPortfolioIndexB((cur) => cycleIndex(cur, 1));

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (podiumTimeoutRef.current) {
        window.clearTimeout(podiumTimeoutRef.current);
        podiumTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setIsContentFading(true);
    const timeout = window.setTimeout(() => setIsContentFading(false), 280);
    return () => window.clearTimeout(timeout);
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  const headerOpacity = Math.max(0, 1 - scrollY / 150);

  const currentPodiumData = podiumData[currentPodium];
  const maxPodiumScore = Math.max(
    currentPodiumData.first.score,
    currentPodiumData.second.score,
    currentPodiumData.third.score
  );

  const podiumBarHeight = (score: number) => Math.max(80, (score / maxPodiumScore) * 260);

  const portfolioImages = [
    "https://via.placeholder.com/360x216.png?text=Portfolio+1",
    "https://via.placeholder.com/360x216.png?text=Portfolio+2",
    "https://via.placeholder.com/360x216.png?text=Portfolio+3",
    "https://via.placeholder.com/360x216.png?text=Portfolio+4",
    "https://via.placeholder.com/360x216.png?text=Portfolio+5",
    "https://via.placeholder.com/360x216.png?text=Portfolio+6"
  ];

  const upcomingEvents = [
    { title: "AI in Schools", date: "April 5, 2026", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { title: "Robotics Bootcamp", date: "April 12, 2026", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
    { title: "Code-a-thon", date: "April 20, 2026", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "Design Thinking Workshop", date: "May 2, 2026", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { title: "Science Fair", date: "May 18, 2026", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { title: "Data Slam", date: "June 6, 2026", description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra." }
  ];

  // static values no longer used after manual portfolio indexes

  const teamMembers = [
    { name: "Ishaan Gupta", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in tellus vitae lectus auctor fermentum." },
    { name: "Nikhil Venigalla", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, justo eget iaculis volutpat." },
    { name: "Neal Nayak", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et purus eu tortor convallis vehicula." },
    { name: "Micah Wang", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt orci nec risus suscipit volutpat." },
    { name: "Eli Grave De Peralta", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla tortor vel lectus convallis venenatis." },
    { name: "Neel Bharambe", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet dolor nec mi commodo porta." },
    { name: "Abhinav Yalamanchili", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper elit sit amet dui eleifend vehicula." },
    { name: "Reyhaan Thummadi", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa eget lorem hendrerit sodales." },
    { name: "Conchessa Delos Reyes", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat nibh vel nulla consectetur luctus." },
    { name: "Maya Iyer", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum metus sit amet urna luctus." },
    { name: "xtra2", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur vitae velit at urna feugiat." },
    { name: "xtra3", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida tortor non dolor mattis, id lacinia odio." },
    { name: "xtra4", role: "TBD", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi nec arcu sodales laoreet." },
  ];

  const pages = [
    // Tab 0: Home
    <div key={0}>
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto my-24 px-6 gap-12">
        <img src="/images/foundation.jpg" alt="STEMgage Foundation" className="w-full md:w-1/2 rounded-lg shadow-lg"/>
        <p className="text-lg md:w-1/2">
           At STEMgage, we started our mission based on a foundation of hands-on learning. Too often, we noticed kids and students spending all of their time learning only through pen and paper, and ignoring the entire world of possibilities that they could gain from applying that knowledge to the real world. STEMgage aims to bridge this gap between theory and reality and offer kids a chance to see how what they are learning applies to their life. 
STEMgage accomplishes this through hosting in-person activities at libraries, where, after a short presentation explaining a project along with the science and math with it, attendees have a set amount of time to complete the challenge while competing with each other to achieve the best score. Right now we work with libraries to bring our projects to kids, but we hope to expand into other fields in the future
        </p>
      </section>
      <section className="bg-gray-50 py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our mission is to provide accessible STEM opportunities and mentorship to students everywhere.
        </p>
      </section>
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Upcoming Events</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="inline-flex items-start space-x-4 py-6 px-4">
            {[...upcomingEvents, ...upcomingEvents].map((event, idx) => (
              <div key={`${event.title}-${idx}`} className="flex-shrink-0 w-64 h-64">
                <div className="event-card border rounded-lg p-4 h-full shadow-sm bg-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-xs text-indigo-600 font-semibold mb-2">{event.date}</p>
                    <p className="text-gray-700 text-sm">{event.description}</p>
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">Scroll for more</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>,

    // Tab 1: Portfolio
    <div key={1} className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
      <p>Showcase of our previous projects and events.</p>

      <section className="mt-12">
        <h3 className="text-3xl font-semibold mb-4">Portfolio Set A</h3>
        <div className="flex items-center justify-center gap-4">
          <button onClick={prevPortfolioA} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">◀</button>
          <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-black shadow-lg">
            <img
              src={portfolioImages[portfolioIndexA]}
              alt={`Portfolio A ${portfolioIndexA + 1}`}
              className="w-full h-[520px] object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src = "https://via.placeholder.com/1280x720.png?text=Image+not+found";
              }}
            />
          </div>
          <button onClick={nextPortfolioA} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">▶</button>
        </div>
        <p className="text-sm text-gray-500 mt-2">{portfolioIndexA + 1} / {portfolioImages.length}</p>
      </section>

      <div className="my-12 py-6 bg-gray-100 rounded-lg">
        <h4 className="text-xl font-bold">Placeholder heading between portfolios</h4>
        <p className="text-sm text-gray-600">Use this area for section description, calls to action, or filters.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-3xl font-semibold mb-4">Portfolio Set B</h3>
        <div className="flex items-center justify-center gap-4">
          <button onClick={prevPortfolioB} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">◀</button>
          <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-black shadow-lg">
            <img
              src={portfolioImages[portfolioIndexB]}
              alt={`Portfolio B ${portfolioIndexB + 1}`}
              className="w-full h-[520px] object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src = "https://via.placeholder.com/1280x720.png?text=Image+not+found";
              }}
            />
          </div>
          <button onClick={nextPortfolioB} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">▶</button>
        </div>
        <p className="text-sm text-gray-500 mt-2">{portfolioIndexB + 1} / {portfolioImages.length}</p>
      </section>
    </div>,

    // Tab 2: Contact Us
    <div key={2} className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us / Feedback</h2>
      <p className="mb-8">Get in touch with our team or provide feedback.</p>
      <section className="border rounded-lg p-6 max-w-3xl mx-auto bg-gray-50">
        <h3 className="text-2xl font-semibold mb-3">Need anything?</h3>
        <p className="text-gray-700 mb-6">If you have questions, requests, or would like to partner with us, we are here to help. Click the button below to start the conversation.</p>
        <div className="flex gap-4 justify-center mb-6">
          <a
            href="#TODO_REPLACE_LINK"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Contact form (link placeholder)
          </a>
          <a
            href="#TODO_REPLACE_FEEDBACK_LINK"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
          >
            Send Feedback (link placeholder)
          </a>
        </div>
      </section>
      <section className="mt-8 max-w-3xl mx-auto">
        <div className="border rounded-lg p-6 bg-white mb-6">
          <h4 className="text-xl font-semibold mb-3">Email</h4>
          <p className="text-gray-700 mb-2"><strong>Main:</strong> <span className="text-blue-600">[TODO: Add email]</span></p>
          <p className="text-gray-700"><strong>Support:</strong> <span className="text-blue-600">[TODO: Add email]</span></p>
        </div>
        <div className="border rounded-lg p-6 bg-white">
          <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
          <p className="text-gray-700 mb-2"><strong>Instagram:</strong> <a href="#TODO_INSTAGRAM" className="text-blue-600 hover:underline">[TODO: Add Instagram link]</a></p>
          <p className="text-gray-700 mb-2"><strong>Twitter:</strong> <a href="#TODO_TWITTER" className="text-blue-600 hover:underline">[TODO: Add Twitter link]</a></p>
          <p className="text-gray-700 mb-2"><strong>Facebook:</strong> <a href="#TODO_FACEBOOK" className="text-blue-600 hover:underline">[TODO: Add Facebook link]</a></p>
          <p className="text-gray-700"><strong>LinkedIn:</strong> <a href="#TODO_LINKEDIN" className="text-blue-600 hover:underline">[TODO: Add LinkedIn link]</a></p>
        </div>
      </section>
    </div>,

    // Tab 3: Our Team
    <div key={3} className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Team</h2>
      <p className="text-center max-w-3xl mx-auto mb-12">Meet the people behind STEMgage.</p>

      <section className="grid gap-10 md:grid-cols-2">
        {teamMembers.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="flex gap-4 items-start p-4 border rounded-lg shadow-sm bg-white"
          >
            <img
              src="/images/foundation.jpg"
              alt={`Team member ${member.name}`}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold mb-1">{member.name} — {member.role}</h3>
              <p className="text-gray-700">{member.bio} Fusce molestie, orci at porttitor scelerisque, neque metus finibus ipsum, eu laoreet risus enim eget sapien.</p>
            </div>
          </div>
        ))}
      </section>
    </div>,
    // Tab 4: Registration
    <div key={4} className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Registration</h2>
      <p className="mb-8">Sign up to participate in upcoming events.</p>

      <section className="border rounded-lg p-6 max-w-3xl mx-auto bg-gray-50 mb-8">
        <h3 className="text-2xl font-semibold mb-3">Event Registration</h3>
        <p className="text-gray-700 mb-4">Register for our upcoming STEM workshops and activities.</p>
        <a
          href="#TODO_EVENT_REGISTRATION"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition mr-4"
        >
          Register for Events (link placeholder)
        </a>
        <a
          href="#TODO_VOLUNTEER_SIGNUP"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
        >
          Sign Up to Be a Volunteer (link placeholder)
        </a>
      </section>

      <section className="border rounded-lg p-6 max-w-3xl mx-auto bg-white mb-8">
        <h3 className="text-2xl font-semibold mb-3">Share Your Ideas</h3>
        <p className="text-gray-700 mb-4">Have suggestions for future events or improvements? We'd love to hear them!</p>
        <form className="text-left">
          <textarea
            placeholder="Enter your ideas here..."
            className="w-full p-3 border rounded mb-4"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
          >
            Submit Ideas (placeholder)
          </button>
        </form>
      </section>

      <section className="border rounded-lg p-6 max-w-3xl mx-auto bg-gray-50">
        <h3 className="text-2xl font-semibold mb-3">Other Options</h3>
        <p className="text-gray-700 mb-4">Explore additional ways to get involved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#TODO_MENTORSHIP"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
          >
            Become a Mentor (placeholder)
          </a>
          <a
            href="#TODO_PARTNERSHIP"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition"
          >
            Partnership Inquiry (placeholder)
          </a>
          <a
            href="#TODO_DONATE"
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            Donate (placeholder)
          </a>
        </div>
      </section>
    </div>,

    // Tab 5: Top Scores
    <div key={5} className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Top Scores</h2>
      <p className="mb-8">Check out our top student achievements.</p>

      <div className={`mb-8 transition-all duration-250 ease-out ${isPodiumFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
        <h3 className="text-2xl font-semibold mb-4">Competition Date: {podiumData[currentPodium].date}</h3>
        <div className="flex justify-center items-end space-x-8 mb-8">
            {/* 3rd Place - Left */}
            <div className="flex flex-col items-center">
              <div
                className="bg-gray-300 w-24 rounded-t-lg flex items-end justify-center mb-2"
                style={{ height: `${podiumBarHeight(currentPodiumData.third.score)}px` }}
              >
                <span className="text-lg font-bold text-gray-700">3rd</span>
              </div>
              <div className="bg-gray-400 w-32 rounded-t-lg flex flex-col items-center justify-center p-2">
                <span className="text-sm font-semibold">{currentPodiumData.third.name}</span>
                <span className="text-xs">{currentPodiumData.third.score} pts</span>
              </div>
            </div>

            {/* 1st Place - Middle */}
            <div className="flex flex-col items-center">
              <div
                className="bg-yellow-400 w-24 rounded-t-lg flex items-end justify-center mb-2 relative"
                style={{ height: `${podiumBarHeight(currentPodiumData.first.score)}px` }}
              >
                <span className="text-lg font-bold text-yellow-800">1st</span>
              </div>
              <div className="bg-yellow-500 w-32 rounded-t-lg flex flex-col items-center justify-center p-2">
                <span className="text-sm font-semibold">{currentPodiumData.first.name}</span>
                <span className="text-xs">{currentPodiumData.first.score} pts</span>
              </div>
            </div>

            {/* 2nd Place - Right */}
            <div className="flex flex-col items-center">
              <div
                className="bg-gray-200 w-24 rounded-t-lg flex items-end justify-center mb-2"
                style={{ height: `${podiumBarHeight(currentPodiumData.second.score)}px` }}
              >
                <span className="text-lg font-bold text-gray-700">2nd</span>
              </div>
              <div className="bg-gray-300 w-32 rounded-t-lg flex flex-col items-center justify-center p-2">
                <span className="text-sm font-semibold">{currentPodiumData.second.name}</span>
                <span className="text-xs">{currentPodiumData.second.score} pts</span>
              </div>
            </div>
          </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrevPodium}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            ← Previous
          </button>
          <button
            onClick={handleNextPodium}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>,
  ];

  return (
    <main className="bg-white text-gray-900 transition-all duration-300">
      <div
        className="sticky top-0 z-50 bg-white py-6 transition-opacity duration-200"
        style={{ opacity: headerOpacity }}
      >
        <h1 className="text-5xl font-bold text-center mb-6">STEMgage</h1>
        <TabNavi activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div
        className={`transition-all duration-350 ease-out ${
          isContentFading
            ? "opacity-0 translate-y-3"
            : "opacity-100 translate-y-0"
        }`}
      >
        {pages[activeTab]}
      </div>
    </main>
  );
}