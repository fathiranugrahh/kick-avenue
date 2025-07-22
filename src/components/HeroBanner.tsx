"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 11 slides, each with one image
  const slides = [
    {
      title: "Padel Collection",
      image: "/images/gambar1.jpg"
    },
    {
      title: "Premium Collection",
      image: "/images/gambar2.jpg"
    },
    {
      title: "Sport Collection",
      image: "/images/gambar3.jpg"
    },
    {
      title: "Elite Collection",
      image: "/images/gambar4.png"
    },
    {
      title: "Pro Collection",
      image: "/images/gambar5.jpg"
    },
    {
      title: "Master Collection",
      image: "/images/gambar6.jpg"
    },
    {
      title: "Champion Collection",
      image: "/images/gambar8.jpg"
    },
    {
      title: "Victory Collection",
      image: "/images/gambar9.png"
    },
    {
      title: "Legend Collection",
      image: "/images/gambar10.jpg"
    },
    {
      title: "Ultimate Collection",
      image: "/images/gambar11.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-48 lg:h-64 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Navigation Controls */}
      <div className="relative z-10 flex items-center justify-between h-full">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="ml-4 bg-black/30 hover:bg-black/50 rounded-full p-3 shadow-lg transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="mr-4 bg-black/30 hover:bg-black/50 rounded-full p-3 shadow-lg transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator - positioned at bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;