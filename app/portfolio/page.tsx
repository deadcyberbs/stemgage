"use client";
import { useState } from "react";
import { portfolioImages } from "@/lib/data";

export default function PortfolioPage() {
  const [portfolioIndexA, setPortfolioIndexA] = useState(0);
  const [portfolioIndexB, setPortfolioIndexB] = useState(0);

  const cycleIndex = (current: number, delta: number) => {
    return (current + delta + portfolioImages.length) % portfolioImages.length;
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 text-center animate-in fade-in duration-500">
      <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
      <p>Showcase of our previous projects and events.</p>

      <section className="mt-12">
        <h3 className="text-3xl font-semibold mb-4">Portfolio Set A</h3>
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => setPortfolioIndexA(c => cycleIndex(c, -1))} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">◀</button>
          <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-black shadow-lg">
            <img src={portfolioImages[portfolioIndexA]} alt="Portfolio A" className="w-full h-[520px] object-cover" />
          </div>
          <button onClick={() => setPortfolioIndexA(c => cycleIndex(c, 1))} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">▶</button>
        </div>
      </section>

      <section className="mt-24">
        <h3 className="text-3xl font-semibold mb-4">Portfolio Set B</h3>
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => setPortfolioIndexB(c => cycleIndex(c, -1))} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">◀</button>
          <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-black shadow-lg">
            <img src={portfolioImages[portfolioIndexB]} alt="Portfolio B" className="w-full h-[520px] object-cover" />
          </div>
          <button onClick={() => setPortfolioIndexB(c => cycleIndex(c, 1))} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">▶</button>
        </div>
      </section>
    </div>
  );
}
