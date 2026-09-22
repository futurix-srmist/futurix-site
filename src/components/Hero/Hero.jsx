import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import HeroScene from '../../three/HeroScene';
import logo from '../../assets/images/logo.png';
import './Hero.css';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current?.querySelectorAll('.hero__char');
    const words = titleRef.current?.querySelectorAll('.hero__accent-word-inner');
    if (chars?.length) {
      gsap.fromTo(
        chars,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.035,
          ease: 'power4.out',
          delay: 0.3,
        }
      );
    }
    if (words?.length) {
      gsap.fromTo(
        words,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: 'power4.out',
          delay: 0.75,
        }
      );
    }
  }, []);

  const line1 = ['BUILD', 'BEYOND'];
  const line2 = ['THE', 'CLASSROOM'];

  const renderCharLine = (words, keyPrefix) => (
    <span className="hero__line">
      {words.map((word, wi) => (
        <span className="hero__word" key={`${keyPrefix}-w${wi}`}>
          {word.split('').map((c, i) => (
            <span className="hero__char-wrap" key={`${keyPrefix}-${wi}-${i}`}>
              <span className="hero__char">{c}</span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );

  const renderAccentLine = (words, keyPrefix) => (
    <span className="hero__line hero__line--accent">
      {words.map((word, wi) => (
        <span className="hero__word hero__accent-word" key={`${keyPrefix}-w${wi}`}>
          <span className="hero__accent-word-inner">{word}</span>
        </span>
      ))}
    </span>
  );

  return (
    <section id="top" className="hero">
      <HeroScene />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero__kicker"
        >
          <img src={logo} alt="" className="hero__mini-logo" />
          <span>CTECH ASSOCIATION · SRMIST KTR</span>
        </motion.div>

        <h1 className="hero__title" ref={titleRef}>
          {renderCharLine(line1, 'l1')}
          {renderAccentLine(line2, 'l2')}
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          FUTURIX is the official student association of the Department of
          Computing Technologies at SRMIST — a community that learns beyond
          classrooms, builds beyond ideas, and creates beyond expectations.
        </motion.p>

        <motion.div
          className="hero__cta-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <a
            href="#about"
            className="hero__cta"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Enter the Grid
          </a>
          <span className="hero__tagline">Innovation. Technology. Future.</span>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="hero__scroll-line" />
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
}
