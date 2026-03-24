"use client";

interface TabNaviProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export default function TabNavi({ activeTab, setActiveTab }: TabNaviProps) {
  const tabs = ["Home", "Portfolio", "Contact Us", "Our Team", "Registration", "Top Scores"];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex justify-around border-b mb-6 transition-all duration-300 ease-out">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`py-2 px-4 transition-all duration-300 ease-out transform ${
              activeTab === index
                ? "border-b-2 border-black font-bold text-black opacity-100 scale-105"
                : "text-gray-500 hover:text-gray-900 hover:opacity-100 opacity-80"
            }`}
            aria-current={activeTab === index ? "page" : undefined}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}