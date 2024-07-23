import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  label?:string
}

const Counter: React.FC<CounterProps> = ({ target , label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const end = target;
        const duration = 2000;
        const increment = end / (duration / 20);

        const updateCount = () => {
          start += increment;
          if (start < end) {
            setCount(Math.ceil(start));
            requestAnimationFrame(updateCount);
          } else {
            setCount(end);
          }
        };

        setCount(0);  // Reset count to 0 every time the element intersects
        requestAnimationFrame(updateCount);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
  }, [target]);

  return (
    <span className="number" ref={elementRef}>
      +{count} {" "} {label}
    </span>
  );
};

export default Counter;
