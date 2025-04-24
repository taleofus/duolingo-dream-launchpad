
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface WaitlistProgressProps {
  imageLoaded: boolean;
  onImageLoad: () => void;
}

const WaitlistProgress: React.FC<WaitlistProgressProps> = ({ imageLoaded, onImageLoad }) => {
  const [progress, setProgress] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(current => {
        const change = Math.random() < 0.5 ? -0.1 : 0.1;
        const newValue = current + change;
        return Math.min(Math.max(newValue, 65), 75);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block w-1/3 relative">
      {!imageLoaded && <Skeleton className="w-full h-[300px] rounded-xl" />}
      <img
        src="/lovable-uploads/098aa936-5ba7-4eff-81a3-b9aba2cdaef8.png"
        alt="Strive Skateboarding Sloth Mascot"
        className={`w-full animate-float ${imageLoaded ? "block" : "hidden"}`}
        onLoad={onImageLoad}
        loading="lazy"
      />
      <div className="mt-6 bg-gray-100 w-full rounded-full h-3">
        <div
          className="bg-duo-purple h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm font-medium text-gray-600 mt-3">
        {Math.round(progress)}% of waitlist spots filled
      </p>
    </div>
  );
};

export default WaitlistProgress;
