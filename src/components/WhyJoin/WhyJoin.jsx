import { motion } from 'framer-motion';
import './WhyJoin.css';

const REASONS = [
  { verb: 'Learn', text: 'Explore technologies, tools, and skills beyond your curriculum.' },
  { verb: 'Build', text: 'Work on projects, challenges, and ideas that solve real problems.' },
  { verb: 'Connect', text: 'Meet people who share your curiosity, ambition, and passion for technology.' },
  { verb: 'Lead', text: 'Organize events, manage teams, take decisions, and turn plans into execution.' },
  { verb: 'Innovate', text: 'Get an environment where your ideas are encouraged and challenged.' },
  { verb: 'Get Exposure', text: 'Be part of hackathons, ideathons, workshops, industry interactions, and large-scale technical events.' },
];

export default function WhyJoin() {
  return (
    <section id="why-join" className="section why">
      <div className="why__intro">
        <span className="section-tag">WHY JOIN FUTURIX</span>
        <h2 className="why__heading">
          Because college is more than <span className="grad-text">attending classes.</span>
        </h2>
        <p className="why__lede">
          Futurix gives you a space to discover what you&apos;re capable of.
        </p>
      </div>

      <div className="why__list">
        {REASONS.map((r, i) => (
          <motion.div
            className="why__row"
            key={r.verb}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="why__verb">{r.verb}</span>
            <span className="why__dash" />
            <span className="why__text">{r.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="why__closer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <p>
          And most importantly, you don&apos;t need to be an expert to join.
          Futurix is a place where you can start as a learner and grow into a
          creator, leader, innovator, or entrepreneur.
        </p>
        <p className="why__closer-strong">
          Don&apos;t just be a part of the crowd.
          <br />
          Be a part of the community that builds what comes next.
        </p>
      </motion.div>
    </section>
  );
}
