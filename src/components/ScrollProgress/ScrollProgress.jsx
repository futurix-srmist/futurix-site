import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      gsap.to(bar, { width: `${pct}%`, duration: 0.15, ease: 'none' });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div className="scroll-progress__bar" ref={barRef} />
    </div>
  );
}
