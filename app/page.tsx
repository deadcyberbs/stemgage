import { upcomingEvents } from "@/lib/data";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto my-24 px-6 gap-12">
        <img src="/images/foundation.jpg" alt="STEMgage Foundation" className="w-full md:w-1/2 rounded-lg shadow-lg"/>
        <p className="text-lg md:w-1/2">
          At STEMgage, we started our mission based on a foundation of hands-on learning. Too often, we noticed kids and students spending all of their time learning only through pen and paper, and ignoring the entire world of possibilities that they could gain from applying that knowledge to the real world. STEMgage aims to bridge this gap between theory and reality and offer kids a chance to see how what they are learning applies to their life. 
          <br/><br/>
          STEMgage accomplishes this through hosting in-person activities at libraries, where, after a short presentation explaining a project along with the science and math with it, attendees have a set amount of time to complete the challenge while competing with each other to achieve the best score. Right now we work with libraries to bring our projects to kids, but we hope to expand into other fields in the future.
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
            {upcomingEvents.map((event, idx) => (
              <div key={`${event.title}-${idx}`} className="flex-shrink-0 w-64 h-64">
                <div className="event-card border rounded-lg p-4 h-full shadow-sm bg-white flex flex-col justify-between transition hover:scale-105 hover:shadow-md">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-xs text-indigo-600 font-semibold mb-2">{event.date}</p>
                    <p className="text-gray-700 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
