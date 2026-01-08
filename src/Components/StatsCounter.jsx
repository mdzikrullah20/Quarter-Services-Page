import React, { useState, useEffect, useRef } from 'react';

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { end: 385, label: 'Properties to Rent' },
    { end: 285, label: 'Properties to Sell' },
    { end: 400, label: 'Properties to Under Offer' },
    { end: 38, label: 'Square.ft', suffix: 'k' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className='relative w-full h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center'
      style={{
        backgroundImage: `url('https://haviosoft.com/bizrent/assets/images/fun-fact.png')`,
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm'></div>

      {/* Stats Container */}
      <div className='relative z-10 w-full max-w-7xl px-4 sm:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              end={stat.end} 
              label={stat.label}
              suffix={stat.suffix}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ end, label, suffix = '', isVisible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, delay]);

  return (
    <div className='bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl'>
      <h3 className='text-5xl sm:text-6xl font-bold text-white mb-3'>
        {count}{suffix}
      </h3>
      <p className='text-lg sm:text-xl text-white/90 font-medium'>
        {label}
      </p>
    </div>
  );
}