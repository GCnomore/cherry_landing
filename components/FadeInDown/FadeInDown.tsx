import React, { Fragment, useEffect, useRef, useState } from "react";

interface FadeInDownProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInDown({ children, delay = 0.2 }: FadeInDownProps) {
  const [_fadeIn, _setFadeIn] = useState<boolean>(false);

  const domRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (!_fadeIn && entries[0].isIntersecting) {
          setTimeout(() => {
            _setFadeIn(true);
          }, delay * 1000);
        }
      }
    );
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${_fadeIn ? "fadeInDown" : "hidden"}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
