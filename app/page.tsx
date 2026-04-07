export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto my-24 px-6 gap-12">
        <div className="md:w-1/2">
           <img src="/images/foundation.jpg" alt="STEMgage Foundation" className="rounded-lg shadow-lg bg-gray-200 min-h-[300px] w-full"/>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Foundation</h2>
          <p className="text-lg text-gray-700">
            At STEMgage, we bridge the gap between theory and reality. We noticed students spend too much time with pen and paper, ignoring the world of possibilities gained from real-world application.
            <br/><br/>
            We host in-person library activities where students complete challenges, compete for scores, and see science in action.
          </p>
        </div>
      </section>
      
      <section className="bg-gray-50 py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Providing accessible STEM opportunities and mentorship to students everywhere through hands-on engagement.
        </p>
      </section>
    </div>
  );
}
