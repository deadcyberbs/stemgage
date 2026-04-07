"use client";
import { useState, useRef, useEffect } from "react";
import { podiumData } from "@/lib/data";

export default function Podium() {
  const [currentPodium, setCurrentPodium] = useState(0);
  const [isPodiumFading, setIsPodiumFading] = useState(false);
  const podiumTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (podiumTimeoutRef.current) window.clearTimeout(podiumTimeoutRef.current);
    };
  }, []);

  const changePodiumIndex = (nextIndex: number) => {
    if (podiumTimeoutRef.current) window.clearTimeout(podiumTimeoutRef.current);
    setIsPodiumFading(true);
    podiumTimeoutRef.current = window.setTimeout(() => {
      setCurrentPodium(nextIndex);
      setIsPodiumFading(false);
      podiumTimeoutRef.current = null;
    }, 250);
  };

  const currentPodiumData = podiumData[currentPodium];
  const maxPodiumScore = Math.max(
    currentPodiumData.first.score,
    currentPodiumData.second.score,
    currentPodiumData.third.score
  );
  const podiumBarHeight = (score: number) => Math.max(80, (score / maxPodiumScore) * 260);

  return (
    <div className={`transition-all duration-250 ease-out ${isPodiumFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
      <h3 className="text-2xl font-semibold mb-4">Competition Date: {currentPodiumData.date}</h3>
      <div className="flex justify-center items-end space-x-8 mb-8">
        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-300 w-24 rounded-t-lg flex items-end justify-center mb-2 transition-all duration-500 ease-out" style={{ height: `${podiumBarHeight(currentPodiumData.third.score)}px` }}>
            <span className="text-lg font-bold text-gray-700">3rd</span>
          </div>
          <div className="bg-gray-400 w-32 rounded-t-lg flex flex-col items-center justify-center p-2">
            <span className="text-sm font-semibold">{currentPodiumData.third.name}</span>
            <span className="text-xs">{currentPodiumData.third.score} pts</span>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center">
          <div className="bg-yellow-400 w-24 rounded-t-lg flex items-end justify-center mb-2 relative transition-all duration-500 ease-out" style={{ height: `${podiumBarHeight(currentPodiumData.first.score)}px` }}>
            <span className="text-lg font-bold text-yellow-800">1st</span>
          </div>
          <div className="bg-yellow-500 w-32 rounded-t-lg flex flex-col items-center justify-center p-2">
            <span className="text-sm font-semibold">{currentPodiumData.first.name}</span>
            <span className="text-xs">{currentPodiumData.first.score} pts</span>
          </div>
        </div>

        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 w-24 rounded-t-lg flex items-end justify-center mb-2 transition-all duration-500 ease-out" style={{ height: `${podiumBarHeight(currentPodiumData.second.score)}px` }}>
            <span className="text-lg font-bold text-gray-700">2nd</span>
          </div>
          <div className="bg-gray-300 w-32 rounded-t-lg flex flex-col items-center justify-center p-2">
            <span className="text-sm font-semibold">{currentPodiumData.second.name}</span>
            <span className="text-xs">{currentPodiumData.second.score} pts</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button onClick={() => changePodiumIndex(currentPodium === 0 ? podiumData.length - 1 : currentPodium - 1)} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
          ← Previous
        </button>
        <button onClick={() => changePodiumIndex(currentPodium === podiumData.length - 1 ? 0 : currentPodium + 1)} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
          Next →
        </button>
      </div>
    </div>
  );
}
