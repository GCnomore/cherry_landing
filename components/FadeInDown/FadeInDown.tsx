import React, { useEffect, useRef, useState } from "react";

export default function FadeInDown(props) {
  const [_fadeIn, _setFadeIn] = useState<boolean>(false);

  const domRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (!_fadeIn && entries[0].isIntersecting) {
          _setFadeIn(true);
        }
      }
    );
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      style={{ width: "100%" }}
      className={`fade-in-section ${_fadeIn ? "fadeInDown" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
