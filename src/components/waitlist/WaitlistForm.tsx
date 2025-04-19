
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Loader2 } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const waitlistSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  onSubmit: (values: WaitlistFormValues) => Promise<void>;
  isSubmitting: boolean;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSubmit, isSubmitting }) => {
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  className="rounded-xl border-2 border-gray-200 focus:border-duo-purple py-6"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-duo-purple hover:bg-duo-purple-hover w-full py-6 flex items-center justify-center gap-2 transition-colors"
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
  );
};

export default WaitlistForm;
