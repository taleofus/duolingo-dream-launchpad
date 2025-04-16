
import React from 'react';
import { Clock, Settings, Trophy } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "Set Your Goals",
      description: "Set daily screen time limits and productivity goals that work for you.",
      color: "bg-duo-blue",
      number: 1
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Track Your Time",
      description: "FocusOwl monitors your screen time and helps you stay on track.",
      color: "bg-duo-purple",
      number: 2
    },
    {
      icon: <Trophy className="h-8 w-8 text-white" />,
      title: "Earn Rewards",
      description: "Complete challenges, build streaks and earn badges as you progress.",
      color: "bg-duo-green",
      number: 3
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Taking control of your screen time has never been this fun and rewarding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm">
              {/* Step Number with Icon */}
              <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center relative mb-8`}>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-700">
                  {step.number}
                </div>
                {step.icon}
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute h-1 bg-gray-200 w-24 left-[calc(50%+3rem)] top-[calc(50%+1.5rem)] transform -translate-y-1/2"></div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Rewards Visualizer */}
        <div className="mt-24 bg-duo-green-light rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Streak-Based Rewards</h3>
              <p className="text-gray-600 mb-6">
                Just like language learning, consistency is key. Build your streak and earn gems to unlock special themes, badges, and productivity power-ups.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-duo-orange flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <span className="font-medium">Day</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-duo-purple flex items-center justify-center text-white font-bold">
                    7
                  </div>
                  <span className="font-medium">Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-duo-green flex items-center justify-center text-white font-bold">
                    30
                  </div>
                  <span className="font-medium">Days</span>
                </div>
              </div>
            </div>
            {/* Gems Visualization */}
            <div className="flex gap-3 animate-float">
              <div className="w-8 h-16 bg-duo-green rotate-45 rounded-md shadow-md"></div>
              <div className="w-8 h-16 bg-duo-purple rotate-45 rounded-md shadow-md"></div>
              <div className="w-8 h-16 bg-duo-orange rotate-45 rounded-md shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
