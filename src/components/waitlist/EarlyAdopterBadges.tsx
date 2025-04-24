
import React from "react";

const EarlyAdopterBadges: React.FC = () => {
  return (
    <div className="mt-8 flex items-center gap-4 lg:gap-6">
      <div className="flex -space-x-3">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="w-10 h-10 rounded-full border-2 border-white bg-duo-purple flex items-center justify-center text-white font-bold"
          >
            {n}
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-600 text-center">
        <p className="font-bold mb-0.5">
          Be among the first to start your productivity streak
        </p>
      </div>
    </div>
  );
};

export default EarlyAdopterBadges;
