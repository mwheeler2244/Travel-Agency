"use client";
import { Hero } from "./components/layout/Hero";
import { Destinations } from "./components/features/Destinations";
import { Testimonials } from "./components/features/Testimonials";
import { ContactForm } from "./components/features/ContactForm";
import { Footer } from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Destinations />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
