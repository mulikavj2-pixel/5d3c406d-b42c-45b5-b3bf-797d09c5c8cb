"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="noise"
      cardStyle="solid-accent"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="BrewHaven"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Your Daily Coffee Escape"
          description="Discover premium, handcrafted coffee drinks made with passion. From rich espresso to creamy cappuccinos, every cup tells a story."
          tag="Artisan Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Order Now", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800052911-imcos76d.jpg"
          imageAlt="BrewHaven coffee shop interior with coffee drinks"
          frameStyle="card"
          metricsLabel="Trusted by coffee lovers across the city since 2015"
          metrics={[
            { id: "1", value: "500+", label: "Daily Customers" },
            { id: "2", value: "8", label: "Coffee Varieties" },
            { id: "3", value: "4.9/5", label: "Average Rating" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Our Coffee Selection"
          description="Hand-selected beans roasted to perfection. Each blend crafted for unique flavor profiles and moments."
          tag="Featured Drinks"
          textboxLayout="default"
          products={[
            {
              id: "1",
              name: "Classic Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800054105-41kdxcxx.jpg",
              imageAlt: "Rich espresso shot"
            },
            {
              id: "2",
              name: "Creamy Cappuccino",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800055395-nihue9tr.jpg",
              imageAlt: "Smooth cappuccino with foam art"
            },
            {
              id: "3",
              name: "Cold Brew",
              price: "$4.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800056639-nigj468e.jpg",
              imageAlt: "Refreshing iced cold brew"
            },
            {
              id: "4",
              name: "Matcha Latte",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800057731-a6oyv2eo.jpg",
              imageAlt: "Green matcha latte drink"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="About BrewHaven"
          useInvertedBackground="noInvert"
          description={[
            "At BrewHaven, we believe coffee is more than a beverage—it's a moment of connection. Since 2015, we've been sourcing the finest beans from sustainable farms worldwide and crafting each cup with precision and care."
          ]}
          metrics={[
            { label: "Years of Excellence", value: "9+" },
            { label: "Beans Sourced Globally", value: "15+" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Coffee Lovers Say"
          description="Real experiences from our community of coffee enthusiasts and daily visitors."
          tag="Customer Reviews"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarah_m",
              testimonial: "The best espresso in the city. BrewHaven's commitment to quality is unmatched. I visit every morning!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800061598-c7mp7ydl.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@james_coffee",
              testimonial: "Their cold brew is absolutely incredible. Smooth, flavorful, and the perfect pick-me-up on hot days.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800062914-17rfm9kp.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emma_loves_coffee",
              testimonial: "Finally found a place that understands premium coffee. The baristas are knowledgeable and passionate.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800064510-6csj4evh.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Park",
              handle: "@michael_brew",
              testimonial: "BrewHaven changed my perspective on what coffee can be. Every visit is a delightful experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800065824-ancimwnp.jpg",
              imageAlt: "Michael Park"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              handle: "@lisa_caffeine",
              testimonial: "The atmosphere is perfect for working or catching up with friends. Plus, the matcha latte is divine!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800067028-msuvfa4y.jpg",
              imageAlt: "Lisa Thompson"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about BrewHaven and our coffee offerings."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "What beans do you use?",
              content: "We source premium beans from sustainable farms across Ethiopia, Colombia, and Indonesia. Each batch is freshly roasted to ensure maximum flavor and aroma."
            },
            {
              id: "2",
              title: "Do you offer dairy-free options?",
              content: "Absolutely! We offer almond, oat, and coconut milk alternatives for all our drinks at no extra charge."
            },
            {
              id: "3",
              title: "Can I order for events or catering?",
              content: "Yes! We provide catering services for corporate events, weddings, and gatherings. Contact us for custom packages and pricing."
            },
            {
              id: "4",
              title: "What are your hours?",
              content: "We're open Monday through Friday from 6:00 AM to 8:00 PM, and Saturday-Sunday from 7:00 AM to 9:00 PM."
            },
            {
              id: "5",
              title: "Do you have a loyalty program?",
              content: "Yes! Sign up for our BrewRewards program to earn points on every purchase and unlock exclusive discounts and free drinks."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have a question or want to say hello? We'd love to hear from you. Visit us or send a message anytime."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us your thoughts...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765800068135-osg4sbwq.jpg"
          imageAlt="BrewHaven coffee shop counter"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="BrewHaven"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "About", href: "about" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Hours", href: "https://brewhaven.local" }
              ]
            },
            {
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}