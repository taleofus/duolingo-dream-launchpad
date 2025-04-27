import React, { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import useApi from "@/hooks/use-api";

interface WaitlistProgressProps {
  imageLoaded: boolean;
  onImageLoad: () => void;
  newSubscriber: string;
}

// Define an interface for the API response
interface WaitlistCountResponse {
  numberOfSubscribers: number;
}

const WaitlistProgress: React.FC<WaitlistProgressProps> = ({
  imageLoaded,
  onImageLoad,
  newSubscriber,
}) => {
  const [progress, setProgress] = useState(0);
  const [joinedCount, setJoinedCount] = useState(0);
  const maxSpots = 1000; // Updated to 1000 as per your requirement
  const imageRef = useRef<HTMLImageElement>(null);
  const { get } = useApi(); // Use the existing useApi hook

  // Fetch real user count from backend
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        // Type the response properly
        const response = await get<WaitlistCountResponse>(
          "/marketing/subscribers/count"
        );
        const count = response?.numberOfSubscribers || 0;
        setJoinedCount(count);
        setProgress(Math.min(Math.round((count / maxSpots) * 100), 99));
      } catch (error) {
        console.error("Failed to fetch waitlist count", error);
        // Fallback to default values if fetch fails
        setJoinedCount(0);
        setProgress(0);
      }
    };

    fetchWaitlistCount();
  }, [get, newSubscriber]);

  // Ensure image is loaded and visible
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => {
        onImageLoad();
      };
    }
  }, [onImageLoad]);

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
