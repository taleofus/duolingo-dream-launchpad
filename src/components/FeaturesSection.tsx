
import React from 'react';
import { Shield, Clock, Zap, Award, Bell, BarChart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color, bgColor }) => {
  return (
    <div className={`${bgColor} p-6 rounded-2xl hover:scale-105 transition-all duration-300`}>
      <div className={`${color} rounded-full p-3 w-fit mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-duo-green" />,
      title: "Screen Time Limits",
      description: "Set daily limits for apps and websites with friendly reminders",
      color: "bg-duo-green-light",
      bgColor: "bg-white shadow-md"
    },
    {
      icon: <Zap className="h-6 w-6 text-duo-orange" />,
      title: "Focus Streaks",
      description: "Build a daily streak by meeting your productivity goals",
      color: "bg-duo-orange-light",
      bgColor: "bg-white shadow-md"
    },
    {
      icon: <Award className="h-6 w-6 text-duo-purple" />,
      title: "Achievement Badges",
      description: "Earn badges for milestones and completing challenges",
      color: "bg-duo-purple-light",
      bgColor: "bg-white shadow-md"
    },
    {
      icon: <Bell className="h-6 w-6 text-duo-blue" />,
      title: "Smart Reminders",
      description: "Friendly owl reminds you to take breaks at the right time",
      color: "bg-duo-blue-light",
      bgColor: "bg-white shadow-md"
    },
    {
      icon: <Clock className="h-6 w-6 text-duo-red" />,
      title: "Time Blocking",
      description: "Schedule focused work sessions with built-in breaks",
      color: "bg-duo-red-light",
      bgColor: "bg-white shadow-md"
    },
    {
      icon: <BarChart className="h-6 w-6 text-duo-green" />,
      title: "Progress Insights",
      description: "Track your productivity and screen habits over time",
      color: "bg-duo-green-light",
      bgColor: "bg-white shadow-md"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Gamified Productivity Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All the tools you need to beat screen addiction and boost your productivity in a fun, engaging way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
