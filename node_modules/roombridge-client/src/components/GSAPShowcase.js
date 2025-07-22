import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GSAPTextReveal, GSAPNeonButton } from './GSAPAnimations';

gsap.registerPlugin(ScrollTrigger);

const GSAPShowcase = () => {
  const showcaseRef = useRef(null);
  const morphingShapeRef = useRef(null);
  const dataCounterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Morphing Shape Animation
      gsap.to(morphingShapeRef.current, {
        rotation: 360,
        duration: 10,
        ease: "none",
        repeat: -1
      });

      gsap.to(morphingShapeRef.current, {
        borderRadius: "50% 30% 70% 40%",
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Data Counter Animation
      const counters = showcaseRef.current.querySelectorAll('.counter-number');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        gsap.fromTo(counter, {
          textContent: 0
        }, {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%"
          }
        });
      });

      // Magnetic Effect for Interactive Elements
      const magneticElements = showcaseRef.current.querySelectorAll('.magnetic');
      magneticElements.forEach(element => {
        const handleMouseMove = (e) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          element.removeEventListener('mousemove', handleMouseMove);
          element.removeEventListener('mouseleave', handleMouseLeave);
        };
      });

      // Parallax Scrolling Effect
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Timeline Animation for Cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-cards-container",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(".gsap-feature-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
      .from(".gsap-feature-card .feature-icon", {
        scale: 0,
        rotation: 180,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.4");

    }, showcaseRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={showcaseRef} className="gsap-showcase py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <GSAPTextReveal className="text-4xl md:text-6xl font-bold text-white mb-6">
            GSAP Enhanced RoomBridge
          </GSAPTextReveal>
          <p className="text-cyan-300 text-xl mb-8 scroll-animate">
            Experience next-level animations and interactions
          </p>
        </div>

        {/* Morphing Shape Demo */}
        <div className="flex justify-center mb-16">
          <div
            ref={morphingShapeRef}
            className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 magnetic"
            style={{
              background: 'linear-gradient(45deg, #00ffff, #8000ff)',
              boxShadow: '0 0 50px rgba(0, 255, 255, 0.5)',
              filter: 'blur(0.5px)'
            }}
          />
        </div>

        {/* Data Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg glass-effect">
            <div className="counter-number text-4xl font-bold text-cyan-400 mb-2" data-target="1500">0</div>
            <p className="text-white">Happy Residents</p>
          </div>
          <div className="text-center p-6 rounded-lg glass-effect">
            <div className="counter-number text-4xl font-bold text-purple-400 mb-2" data-target="850">0</div>
            <p className="text-white">Available Rooms</p>
          </div>
          <div className="text-center p-6 rounded-lg glass-effect">
            <div className="counter-number text-4xl font-bold text-pink-400 mb-2" data-target="95">0</div>
            <p className="text-white">Satisfaction Rate %</p>
          </div>
        </div>

        {/* GSAP Feature Cards */}
        <div className="gsap-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: "🎭", title: "Smooth Animations", desc: "Buttery smooth 60fps animations" },
            { icon: "🎯", title: "Scroll Triggers", desc: "Elements animate as you scroll" },
            { icon: "🧲", title: "Magnetic Effects", desc: "Interactive magnetic elements" },
            { icon: "🌊", title: "Morphing Shapes", desc: "Dynamic shape transformations" },
            { icon: "📊", title: "Data Counters", desc: "Animated number counting" },
            { icon: "🎨", title: "Custom Timelines", desc: "Orchestrated animation sequences" }
          ].map((feature, index) => (
            <div key={index} className="gsap-feature-card p-6 rounded-lg glass-effect magnetic cursor-pointer">
              <div className="feature-icon text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Buttons */}
        <div className="text-center space-x-4">
          <GSAPNeonButton
            onClick={() => console.log('GSAP Button 1 clicked!')}
            className="gsap-float"
          >
            Explore Rooms
          </GSAPNeonButton>
          <GSAPNeonButton
            onClick={() => console.log('GSAP Button 2 clicked!')}
            className="gsap-float"
          >
            Get Started
          </GSAPNeonButton>
        </div>
      </div>
    </div>
  );
};

export default GSAPShowcase;
