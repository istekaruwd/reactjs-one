import { useEffect, useState, useRef } from 'react';

export default function FunFactCount({ number, title, icon }) {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const end = parseInt(number);
    let duration = 1000; // 1s animation
    let stepTime = Math.max(Math.floor(duration / end), 10);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [startCount, number]);

  return (
    <div className="col-lg-3 col-sm-6" ref={ref}>
      <div className="facts_wrapper" aria-label={`${count} ${title}`}>
        <div className="facts_wrapper_icon">
          <i className={icon} aria-hidden="true"></i>
        </div>
        <div className="facts_wrapper_text">
          <h3>{count}</h3>
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
}
