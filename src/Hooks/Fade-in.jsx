import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, delay = 0 }) {
  const [show, setShow] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout( () => setShow(true), delay);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "all 1s ease",
      }}
    >
      {children}
    </div>
  );
}
