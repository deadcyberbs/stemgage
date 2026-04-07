import { teamMembers } from "@/lib/data";

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6 animate-in fade-in duration-500">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Team</h2>
      <p className="text-center max-w-3xl mx-auto mb-12">Meet the people behind STEMgage.</p>

      <section className="grid gap-10 md:grid-cols-2">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex gap-4 items-start p-4 border rounded-lg shadow-sm bg-white">
            <img src={member.img} alt={member.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0 bg-gray-200" />
            <div>
              <h3 className="text-xl font-semibold mb-1">{member.name} — {member.role}</h3>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
