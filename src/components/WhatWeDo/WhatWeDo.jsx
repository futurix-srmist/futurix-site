import { motion } from 'framer-motion';
import './WhatWeDo.css';

const ITEMS = [
  {
    n: '01',
    title: 'Hackathons & Ideathons',
    text: 'Turn ideas into real-world solutions and compete with some of the brightest minds.',
  },
  {
    n: '02',
    title: 'Technical Events & Workshops',
    text: 'Learn emerging technologies through practical, hands-on experiences.',
  },
  {
    n: '03',
    title: 'Tech Talks & Industry Connect',
    text: 'Interact with professionals, experts, and innovators beyond the classroom.',
  },
  {
    n: '04',
    title: 'Innovation & Entrepreneurship',
    text: 'Encourage students to think differently, solve problems, and explore ideas that can become real products.',
  },
  {
    n: '05',
    title: 'Networking & Collaboration',
    text: 'Connect with like-minded students, teams, mentors, and industry communities.',
  },
  {
    n: '06',
    title: 'Leadership & Event Management',
    text: 'Take ownership, manage teams, execute large-scale events, and develop skills beyond technical knowledge.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section wwd">
      <div className="wwd__header">
        <span className="section-tag">WHAT WE DO</span>
        <h2 className="wwd__heading">
          Six ways FUTURIX turns <span className="grad-text">curiosity into craft.</span>
        </h2>
      </div>

      <div className="wwd__grid">
        {ITEMS.map((item, i) => (
          <motion.div
            className="wwd__card"
            key={item.n}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
          >
            <span className="wwd__index font-mono">{item.n}</span>
            <h3 className="wwd__title">{item.title}</h3>
            <p className="wwd__text">{item.text}</p>
            <div className="wwd__card-line" />
          </motion.div>
        ))}
      </div>

      <motion.p
        className="wwd__footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        From events like <strong>Tech Mesh</strong> to the{' '}
        <strong>ULTRON</strong> hackathon series, Futurix creates
        opportunities where students don&apos;t just participate — they
        create, collaborate, and lead.
      </motion.p>
    </section>
  );
}
