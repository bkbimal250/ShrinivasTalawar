"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";

import advocate from "@/data/advocate";

export default function ImageCarousel({
  images = [],
  ariaLabel = "Image carousel",
  className = "",
  priorityFirst = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const resumeTimer = useRef(null);

  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const pauseThenResume = useCallback(() => {
    setIsPaused(true);

    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }

    resumeTimer.current = setTimeout(() => {
      setIsPaused(false);
      resumeTimer.current = null;
    }, 8000);
  }, []);

  useEffect(() => {
    if (!total || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(interval);
  }, [total, isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
      }
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      pauseThenResume();
      prevSlide();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      pauseThenResume();
      nextSlide();
    }
  };

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
    touchEnd.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEnd.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const finalTouch = event.changedTouches?.[0]?.clientX ?? touchEnd.current;
    const distance = touchStart.current - finalTouch;

    if (Math.abs(distance) < 50) return;

    pauseThenResume();

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    touchStart.current = 0;
    touchEnd.current = 0;
  };

  if (!images.length) {
    return null;
  }

  return (
    <div
      className={`image-carousel ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="image-carousel-body">
        {images.map((image, index) => (
          <div
            key={image.id ?? index}
            className={`image-carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={image.src}
              alt={image.alt || "Professional legal office"}
              fill
              preload={priorityFirst && index === 0}
              sizes="
                (max-width: 767px) 100vw,
                (max-width: 1200px) 50vw,
                600px
              "
              className="image-carousel-image"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="image-carousel-prev"
        onClick={() => {
          pauseThenResume();
          prevSlide();
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        className="image-carousel-next"
        onClick={() => {
          pauseThenResume();
          nextSlide();
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <div className="image-carousel-actions" aria-label="Contact actions">
        <a
          className="image-carousel-action image-carousel-action-call"
          href={advocate.phone.href}
          aria-label="Call office"
          onClick={pauseThenResume}
        >
          <Phone size={17} aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          className="image-carousel-action image-carousel-action-whatsapp"
          href={advocate.whatsapp.href}
          aria-label="Contact office on WhatsApp"
          onClick={pauseThenResume}
        >
          <MessageCircle size={17} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>

      <div
        className="image-carousel-pagination"
        aria-label="Carousel pagination"
      >
        {images.map((image, index) => (
          <button
            key={`pagination-${image.id ?? index}`}
            type="button"
            className={`image-carousel-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => {
              pauseThenResume();
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
