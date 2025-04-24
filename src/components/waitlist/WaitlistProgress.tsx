
import React, { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface WaitlistProgressProps {
  imageLoaded: boolean;
  onImageLoad: () => void;
}

const WaitlistProgress: React.FC<WaitlistProgressProps> = ({ imageLoaded, onImageLoad }) => {
  const [progress, setProgress] = useState(69); // Starting with a fixed number
  const [joinedCount, setJoinedCount] = useState(420); // Actual count of people joined
  const maxSpots = 600; // Total spots available
  const imageRef = useRef<HTMLImageElement>(null);

  // Calculate progress based on actual count
  useEffect(() => {
    const calculateProgress = () => {
      const newProgress = Math.min(Math.round((joinedCount / maxSpots) * 100), 99);
      setProgress(newProgress);
    };
    
    calculateProgress();
    
    // Simulate new joins occasionally
    const joinInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance of someone new joining
        setJoinedCount(prev => {
          const newCount = prev + 1;
          return newCount > maxSpots ? maxSpots : newCount;
        });
      }
    }, 5000);
    
    return () => clearInterval(joinInterval);
  }, []);
  
  // Ensure image is loaded and visible
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => {
        onImageLoad();
      };
    }
  }, [onImageLoad]);
  
  // Update progress whenever joined count changes
  useEffect(() => {
    setProgress(Math.min(Math.round((joinedCount / maxSpots) * 100), 99));
  }, [joinedCount]);

  return (
    <div className="hidden md:block w-1/3 relative">
      {!imageLoaded && <Skeleton className="w-full h-[300px] rounded-xl" />}
      <img
        ref={imageRef}
        src="/lovable-uploads/098aa936-5ba7-4eff-81a3-b9aba2cdaef8.png"
        alt="Strive Skateboarding Sloth Mascot"
        className={`w-full animate-float ${imageLoaded ? "block" : "hidden"}`}
        loading="lazy"
      />
      <div className="mt-6 bg-gray-100 w-full rounded-full h-3">
        <div
          className="bg-duo-purple h-full rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm font-medium text-gray-600 mt-3">
        {joinedCount} out of {maxSpots} people already joined - {progress}% full
      </p>
    </div>
  );
};

export default WaitlistProgress;
