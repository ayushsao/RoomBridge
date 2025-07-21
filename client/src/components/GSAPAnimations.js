import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPAnimations = () => {
  const containerRef = useRef(null);
  const neonOrbsRef = useRef([]);
  const cyberpunkParticlesRef = useRef([]);

  useEffect(() => {
    // Create floating neon orbs with GSAP
    const createNeonOrbs = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing orbs
      neonOrbsRef.current.forEach(orb => orb.remove());
      neonOrbsRef.current = [];

      // Create 8 neon orbs
      for (let i = 0; i < 8; i++) {
        const orb = document.createElement('div');
        orb.className = 'gsap-neon-orb';
        
        // Random size and position
        const size = gsap.utils.random(60, 120);
        const startX = gsap.utils.random(0, window.innerWidth);
        const startY = window.innerHeight + 100;
        
        // Neon colors
        const colors = ['#00ffff', '#0080ff', '#8000ff', '#ff00ff', '#00ff80', '#ff8000'];
        const color = colors[i % colors.length];
        
        gsap.set(orb, {
          width: size,
          height: size,
          background: `radial-gradient(circle at 30% 30%, ${color}40, ${color}20)`,
          borderRadius: '50%',
          position: 'fixed',
          left: startX,
          top: startY,
          zIndex: -1,
          boxShadow: `0 0 30px ${color}, 0 0 60px ${color}40, 0 0 90px ${color}20`,
          backdropFilter: 'blur(15px)',
          border: `1px solid ${color}30`
        });
        
        container.appendChild(orb);
        neonOrbsRef.current.push(orb);
        
        // GSAP animation for floating motion
        gsap.to(orb, {
          y: -window.innerHeight - 200,
          x: `+=${gsap.utils.random(-200, 200)}`,
          rotation: 360,
          duration: gsap.utils.random(15, 25),
          ease: "none",
          repeat: -1,
          delay: gsap.utils.random(0, 5),
          modifiers: {
            x: gsap.utils.unitize(gsap.utils.wrap(0, window.innerWidth))
          }
        });
        
        // Pulsing glow effect
        gsap.to(orb, {
          scale: gsap.utils.random(0.8, 1.3),
          duration: gsap.utils.random(2, 4),
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });
      }
    };

    // Create cyberpunk particles
    const createCyberpunkParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing particles
      cyberpunkParticlesRef.current.forEach(particle => particle.remove());
      cyberpunkParticlesRef.current = [];

      // Create 25 particles
      for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'gsap-cyber-particle';
        
        const size = gsap.utils.random(2, 6);
        const colors = ['#00ffff', '#0080ff', '#8000ff', '#ff00ff'];
        const color = colors[i % colors.length];
        
        gsap.set(particle, {
          width: size,
          height: size,
          background: color,
          borderRadius: '50%',
          position: 'fixed',
          left: gsap.utils.random(0, window.innerWidth),
          top: gsap.utils.random(0, window.innerHeight),
          zIndex: -1,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}60`,
          opacity: 0
        });
        
        container.appendChild(particle);
        cyberpunkParticlesRef.current.push(particle);
        
        // Random movement animation
        const tl = gsap.timeline({ repeat: -1 });
        
        tl.to(particle, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        })
        .to(particle, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-100, 100),
          duration: gsap.utils.random(3, 6),
          ease: "none"
        })
        .to(particle, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in"
        })
        .set(particle, {
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight)
        });
        
        tl.delay(gsap.utils.random(0, 3));
      }
    };

    // Initialize animations
    createNeonOrbs();
    createCyberpunkParticles();

    // Cleanup function
    return () => {
      neonOrbsRef.current.forEach(orb => orb.remove());
      cyberpunkParticlesRef.current.forEach(particle => particle.remove());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <div ref={containerRef} className="gsap-animation-container"></div>;
};

// GSAP Page Enter Animations Hook
export const useGSAPPageAnimations = () => {
  useEffect(() => {
    // Animate page elements on load
    const tl = gsap.timeline();
    
    // Animate navbar
    tl.from(".topNavbar", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    // Animate hero content
    .from(".hero-content", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.5")
    // Animate cards/sections with stagger
    .from(".animate-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.8");

    // Scroll-triggered animations
    gsap.utils.toArray(".scroll-animate").forEach((element) => {
      gsap.fromTo(element, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Floating animation for buttons
    gsap.utils.toArray(".gsap-float").forEach((element) => {
      gsap.to(element, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

// GSAP Text Animation Component
export const GSAPTextReveal = ({ children, className = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Split text into characters for animation
    const chars = text.textContent.split('');
    text.innerHTML = chars.map(char => 
      char === ' ' ? ' ' : `<span class="char">${char}</span>`
    ).join('');

    // Animate characters
    gsap.from(text.querySelectorAll('.char'), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: text,
        start: "top 80%"
      }
    });
  }, [children]);

  return (
    <div ref={textRef} className={`gsap-text-reveal ${className}`}>
      {children}
    </div>
  );
};

// GSAP Neon Button Component
export const GSAPNeonButton = ({ children, onClick, className = "" }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        boxShadow: "0 0 25px #00ffff, 0 0 50px #00ffff40",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: "0 0 15px #00ffff60",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleClick = () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`gsap-neon-button ${className}`}
      style={{
        background: 'linear-gradient(45deg, #00ffff20, #8000ff20)',
        border: '2px solid #00ffff60',
        borderRadius: '8px',
        color: '#00ffff',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 15px #00ffff60',
        backdropFilter: 'blur(10px)'
      }}
    >
      {children}
    </button>
  );
};

export default GSAPAnimations;
