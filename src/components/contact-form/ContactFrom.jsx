"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Define form validation schema using Zod
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters." })
    .nonempty({ message: "Full Name is required." }),
  contact: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 characters." })
    .max(15, { message: "Mobile number can't be longer than 15 characters." })
    .nonempty({ message: "Mobile Number is required." }),
  memberId: z.string().optional(),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." })
    .nonempty({ message: "Message is required." }),
});

export function ContactForm() {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Initialize the form using react-hook-form and Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  // Form submission handler
  const onSubmit = async (data) => {
    if(!captchaVerified){
      alert("Please verify that you are not a robot.");
      return;
    }
    try {
      const response = await fetch("https://backend.aggrabandhuss.org/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

       await response.json();
      
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              placeholder="Enter Your Full Name"
              {...register("name")}
              className={`w-full ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Mobile Number Field */}
          <div>
            <label htmlFor="contact" className="block mb-2 text-sm font-medium">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact"
              placeholder="Enter Your Mobile Number"
              {...register("contact")}
              className={`w-full ${errors.contact ? "border-red-500" : ""}`}
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-red-600">
                {errors.contact.message}
              </p>
            )}
          </div>

          {/* Member ID Field (Optional) */}
          <div>
            <label htmlFor="memberId" className="block mb-2 text-sm font-medium">
              Member ID (Optional)
            </label>
            <Input
              id="memberId"
              placeholder="Enter Your Member ID (if any)"
              {...register("memberId")}
              className="w-full"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Write Your Message"
              {...register("message")}
              className={`w-full ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>
          <ReCAPTCHA
            sitekey="6LdF22oqAAAAAPC6-DZdFF13hy5Lb7j7ElYc3eZ8"
            onChange={onCaptchaChange}
          />
          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
