"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Import Image from next/image

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle stars animation inspired by 24labs
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; radius: number; opacity: number }[] =
      [];

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random()
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(0.8, star.opacity));
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-lg lg:text-xl font-bold tracking-tight hover:text-gray-300 transition-colors"
              >
                Haris Afzal
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              <a
                href="#about"
                className="px-3 lg:px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="px-3 lg:px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="px-3 lg:px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="px-3 lg:px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-white text-black px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-200 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-[10px] sm:text-xs text-gray-400 mb-4 sm:mb-6 tracking-[0.2em] uppercase font-light">
          {'/// Full-Stack Developer & Mobile Engineer'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-[1.1]">
            I build, iterate
            <br />& scale <span className="text-gray-400">modern</span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              applications.
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Full-stack developer specializing in Next.js, React, TypeScript, and
            React Native. Building scalable web and mobile solutions with modern
            technologies.
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
            <a
              href="#projects"
              className="border border-white/80 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-200 font-medium"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Harisafzal03"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm hover:border-white transition-all duration-200 font-medium"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] sm:text-xs text-gray-400 mb-3 sm:mb-4 tracking-[0.2em] uppercase font-light">
            {"/// About"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12 leading-tight">
            Crafting Digital
            <br />
            Experiences
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                I&apos;m a passionate full-stack developer with expertise in building
                scalable, performant web and mobile applications. With a strong
                foundation in modern JavaScript frameworks and cross-platform
                development, I transform complex requirements into elegant,
                user-centric solutions.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                My approach combines clean code architecture, responsive design
                principles, and cutting-edge technologies to deliver products
                that not only meet but exceed expectations.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Experience
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="border-l-2 border-gray-700 pl-3 sm:pl-4 py-1">
                    <div className="text-xs sm:text-sm text-gray-400">
                      Full-Stack Development
                    </div>
                    <div className="text-sm sm:text-base text-white">
                      Web & Mobile Applications
                    </div>
                  </div>
                  <div className="border-l-2 border-gray-700 pl-3 sm:pl-4 py-1">
                    <div className="text-xs sm:text-sm text-gray-400">
                      Technologies
                    </div>
                    <div className="text-sm sm:text-base text-white">
                      Next.js, React, TypeScript, React Native
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] sm:text-xs text-gray-600 mb-3 sm:mb-4 tracking-[0.3em] uppercase font-light">
            {"/// Tech Stack"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-10 sm:mb-16 leading-tight">
            Technical Expertise
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Frontend */}
            <div className="border border-white/10 p-6 sm:p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Frontend</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {['Next.js', 'React.js', 'TypeScript', 'Vue.js', 'Astro.js'].map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-sm sm:text-base group/item hover:translate-x-1 transition-transform">
                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                    <span className="text-gray-400 group-hover/item:text-white transition-colors">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile */}
            <div className="border border-white/10 p-6 sm:p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 19H7V5h10v14zm-1-12H8v10h8V7z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Mobile</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {['React Native', 'Cross-Platform', 'iOS & Android'].map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-sm sm:text-base group/item hover:translate-x-1 transition-transform">
                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                    <span className="text-gray-400 group-hover/item:text-white transition-colors">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & More */}
            <div className="border border-white/10 p-6 sm:p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Tools & More</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {['Git & GitHub', 'Responsive Design', 'API Integration', 'Performance Optimization'].map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-sm sm:text-base group/item hover:translate-x-1 transition-transform">
                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                    <span className="text-gray-400 group-hover/item:text-white transition-colors">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/5">
            <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 text-center tracking-wider">ALSO EXPERIENCED WITH</p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              {['Tailwind CSS', 'Contentful', 'Framer Motion', 'Swiper.js', 'Web3', 'REST APIs', 'Cloudflare', 'Vercel'].map((tech) => (
                <div key={tech} className="border border-white/10 px-4 py-2 text-xs sm:text-sm text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] sm:text-xs text-gray-400 mb-3 sm:mb-4 tracking-[0.2em] uppercase font-light">
            {"/// Portfolio"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Selected Work
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10 sm:mb-16 max-w-2xl">
            A showcase of web and mobile applications demonstrating technical
            proficiency and problem-solving capabilities.
          </p>

          {/* Web Projects */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-300">
              Web Applications
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {/* Project 1 */}
              <div className="border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
                <div className="h-40 sm:h-48 relative overflow-hidden bg-gray-900">
                  <Image
                    src="/images/quicknode.png"
                    alt="Web3 App"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    QuickNode
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    Comprehensive blockchain developer documentation platform
                    with interactive guides, API references, and tutorials for
                    Web3 development.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      NextJS
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      Redux
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      Contentful
                    </span>
                  </div>
                  <a
                    target="_blank"
                    href="https://www.quicknode.com/builders-guide"
                    className="text-xs sm:text-sm text-white hover:text-gray-400 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
                <div className="h-40 sm:h-48 relative overflow-hidden bg-gray-900">
                  <Image
                    src="/images/evload.png"
                    alt="Electronic Vehicle App"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">EV-Load</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    Electric vehicle charging station locator and management
                    platform with real-time availability, booking system, and
                    payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      NextJS
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      Contentful
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      Swiper
                    </span>
                  </div>
                  <a
                    target="_blank"
                    href="https://www.ev-load.com/"
                    className="text-xs sm:text-sm text-white hover:text-gray-400 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
                <div className="h-40 sm:h-48 relative overflow-hidden bg-gray-900">
                  <Image
                    src="/images/ashera.png"
                    alt="Ecommerce Pen App"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    Ashera Design
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    Premium interior design studio website showcasing luxury
                    residential and commercial projects with immersive gallery,
                    project portfolios, and seamless booking system.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      NextJS
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      Lucide
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      GSAP
                    </span>
                  </div>
                  <a
                    target="_blank"
                    href="https://ashera-design.com/"
                    className="text-xs sm:text-sm text-white hover:text-gray-400 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Projects */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-300">
              Mobile Applications
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {/* Mobile App 1 */}
              <div className="border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
                <div className="h-40 sm:h-48 relative overflow-hidden bg-gray-900">
                  <Image
                    src="/images/Mobile1.png"
                    alt="Drug Quitter App"
                    fill
                    className="object-fit group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    Phase App
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    A supportive mobile app for drug quitters with articles,
                    music, games, AI-powered speech chatbot, and sobriety
                    tracking. Managed plans and subscriptions via Stripe and
                    RevenueCat integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      React Native
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      AI Chatbot
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      RevenueCat
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile App 2 */}
              <div className="border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
                <div className="h-40 sm:h-48 relative overflow-hidden bg-gray-900">
                  <Image
                    src="/images/Mobile2.png"
                    alt="Fitness App"
                    fill
                    className="object-fit group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    Blaque Fitness
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    Enterprise fitness app built with React Native and
                    integrated with a custom dashboard backend. Includes workout
                    tracking, notifications, chat system, and secure Mastercard
                    payments for subscription plans.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      React Native
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      Redux
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      Mastercard API
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile App 3 */}
              <div className="border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
                <div className="h-40 sm:h-48 relative overflow-hidden bg-gray-900">
                  <Image
                    src="/images/Mobile3.png"
                    alt="Ecommerce App"
                    fill
                    className="object-fit group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    DressFit
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    Full-featured e-commerce platform for fashion shopping with
                    an AI try-on system for shirts and pants. Includes Stripe
                    checkout, RevenueCat-based backend, and style-related
                    articles for an engaging shopping experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      React Native
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      AI Try-On
                    </span>
                    <span className="text-[10px] sm:text-xs border border-gray-700 px-2 py-1">
                      Stripe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] sm:text-xs text-gray-400 mb-3 sm:mb-4 tracking-[0.2em] uppercase font-light">
            {"/// Let's Connect"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Ready to Build
            <br />
            Something Great?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            I&apos;m always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>

          <div className="flex gap-3 sm:gap-6 justify-center flex-wrap mb-8 sm:mb-12 px-4">
            <a
              href="mailto:harisafzal503@gmail.com"
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium hover:bg-gray-200 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/Harisafzal03"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm hover:border-white transition-all duration-200"
            >
              View GitHub
            </a>
          </div>

          <div className="flex gap-4 sm:gap-8 justify-center text-xs sm:text-sm text-gray-400 flex-wrap">
            <a
              href="https://github.com/Harisafzal03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-haris-afzal-08854a252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
            <div className="order-2 sm:order-1">
              © 2025 Haris Afzal. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
