
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface WaitlistProgressProps {
  imageLoaded: boolean;
  onImageLoad: () => void;
}

const WaitlistProgress: React.FC<WaitlistProgressProps> = ({ imageLoaded, onImageLoad }) => {
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
          style={{ width: "70%" }}
        ></div>
      </div>
      <p className="text-sm font-medium text-gray-600 mt-3">
        70% of waitlist spots filled
      </p>
    </div>
  );
};

export default WaitlistProgress;
