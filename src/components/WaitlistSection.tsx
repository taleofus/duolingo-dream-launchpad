import React, { useState } from "react";
import { CheckCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import useApi from "@/hooks/use-api";
import WaitlistForm from "./waitlist/WaitlistForm";
import EarlyAdopterBadges from "./waitlist/EarlyAdopterBadges";
import WaitlistProgress from "./waitlist/WaitlistProgress";

const WaitlistSection: React.FC = () => {
  const [newSubscriber, setNewSubscriber] = useState<string>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();
  const { post } = useApi();

  const onSubmit = async (values: { email: string }) => {
    setIsSubmitting(true);

    try {
      await post("/marketing/subscribe", values);
      setNewSubscriber(values.email);
      setSubmitted(true);
      toast({
        title: "Success!",
        description:
          "You've been added to the waitlist. We'll be in touch soon!",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "",
        description: error.message
          ? error.message
          : `There was a problem adding you to the waitlist. Please try again later.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-duo-purple opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-duo-purple opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-duo-purple" size={20} />
                <span className="text-sm font-bold text-duo-purple">
                  JOIN 1,000+ EARLY ADOPTERS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-custom-secondary">
                Get Early Access to Strive
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Be among the first to experience our productivity game that
                makes managing screen time fun and rewarding.
              </p>

              {submitted ? (
                <div className="bg-duo-purple bg-opacity-10 rounded-xl p-4 flex items-center gap-3 mb-6">
                  <CheckCircle className="text-duo-purple" size={24} />
                  <p className="font-medium">
                    Thanks! You're on the waitlist. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <WaitlistForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
              )}

              <EarlyAdopterBadges />
            </div>

            <WaitlistProgress
              imageLoaded={imageLoaded}
              onImageLoad={() => setImageLoaded(true)}
              newSubscriber={newSubscriber}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
