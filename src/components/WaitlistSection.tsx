import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ChevronRight, Users, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useApi from "@/hooks/use-api";

// Define form validation schema
const waitlistSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

const WaitlistSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();
  const { post } = useApi();

  // Initialize form with react-hook-form and zod validation
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: WaitlistFormValues) => {
    setIsSubmitting(true);

    try {
      await post("/marketing/subscribe", values);

      // Handle successful submission
      setSubmitted(true);
      toast({
        title: "Success!",
        description:
          "You've been added to the waitlist. We'll be in touch soon!",
      });
      form.reset();

      // Reset submission state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      // Handle error
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
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-custom-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-custom-primary opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
            {/* Waitlist Form Section */}
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-custom-primary" size={20} />
                <span className="text-sm font-bold text-custom-primary">
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
                <div className="bg-custom-primary bg-opacity-10 rounded-xl p-4 flex items-center gap-3 mb-6">
                  <CheckCircle className="text-custom-primary" size={24} />
                  <p className="font-medium">
                    Thanks! You're on the waitlist. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Enter your email address"
                              className="rounded-xl border-2 border-gray-200 focus:border-custom-primary py-6"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="bg-custom-primary hover:bg-opacity-90 w-full py-6 flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ChevronRight size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}

              {/* Gamification Tease */}
              <div className="mt-8 flex items-center gap-4 lg:gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-10 h-10 rounded-full border-2 border-white bg-custom-primary flex items-center justify-center text-white font-bold"
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-bold mb-0.5">
                    Earn exclusive badges as an early adopter
                  </p>
                  <p className="text-gray-500">
                    Be among the first to start your productivity streak
                  </p>
                </div>
              </div>
            </div>

            {/* Mascot/Visual Element */}
            <div className="hidden md:block w-1/3 relative">
              {!imageLoaded && (
                <Skeleton className="w-full h-[300px] rounded-xl" />
              )}
              <img
                src="/lovable-uploads/098aa936-5ba7-4eff-81a3-b9aba2cdaef8.png"
                alt="Strive Skateboarding Sloth Mascot"
                className={`w-full animate-float ${
                  imageLoaded ? "block" : "hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />

              {/* Progress Bar */}
              <div className="mt-6 bg-gray-100 w-full rounded-full h-3">
                <div
                  className="bg-custom-primary h-full rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="text-sm font-medium text-gray-600 mt-3">
                70% of waitlist spots filled
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
