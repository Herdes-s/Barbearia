import { useEffect, useState } from "react";

export default function FadeIn({ children, delay = 0}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setShow(true);
    }, delay)
  }, [delay]);

  return (
    <div
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
