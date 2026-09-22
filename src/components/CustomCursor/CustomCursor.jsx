import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const ringPos = { x: 0, y: 0 };

    const onMove = (e) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power3.out' });
    };

    const onDown = () => gsap.to(ring, { scale: 0.7, duration: 0.2 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.2 });

    const onEnterInteractive = () => gsap.to(ring, { scale: 1.8, duration: 0.25, opacity: 0.5 });
    const onLeaveInteractive = () => gsap.to(ring, { scale: 1, duration: 0.25, opacity: 1 });

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);

    const interactive = document.querySelectorAll('a, button');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
