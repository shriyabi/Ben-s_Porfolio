import React, { useEffect, useRef, useState } from "react";

const AnimatedComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={animatedRef}
      className={`animated-element ${isVisible ? "fadeInLeft" : ""}`}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
