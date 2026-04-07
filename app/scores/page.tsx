import Podium from "@/components/Podium";

export default function ScoresPage() {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6 text-center animate-in fade-in duration-500">
      <h2 className="text-4xl font-bold mb-6">Top Scores</h2>
      <p className="mb-12">Check out our top student achievements from recent competitions.</p>
      
      {/* The extracted interactive podium component */}
      <Podium />
      
    </div>
  );
}
