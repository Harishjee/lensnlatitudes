"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { honeypot: "" },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const labelClass = "block text-gray-300 text-sm font-medium mb-2";
  const inputClass =
    "w-full bg-[#0f0f0f] border border-white/12 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/20 transition text-[15px]";
  const errorClass = "text-red-400 text-xs mt-1.5";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-[#00bcd4]/15 flex items-center justify-center mb-6">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-white text-2xl font-normal mb-3">Message sent!</h3>
        <p className="text-gray-400 leading-relaxed max-w-sm" style={{ fontSize: "16px" }}>
          Thank you for reaching out. Salil and the team will get back to you shortly —
          keep an eye on your inbox.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-[#00bcd4] hover:text-white text-sm font-medium underline underline-offset-4 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>First Name *</label>
          <input {...register("firstName")} placeholder="Jane" className={inputClass} />
          {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Last Name *</label>
          <input {...register("lastName")} placeholder="Doe" className={inputClass} />
          {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email *</label>
          <input {...register("email")} type="email" placeholder="jane@email.com" className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>
            Phone <span className="text-gray-600 font-normal">(optional)</span>
          </label>
          <input {...register("phone")} type="tel" placeholder="+91 90000 00000" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register("message")}
          placeholder="Tell us which safari or shoot you're interested in, dates, group size, or any questions…"
          rows={5}
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold py-4 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please email us directly at lensnlatitudes@gmail.com
        </p>
      )}
    </form>
  );
}
