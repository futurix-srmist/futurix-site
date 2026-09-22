import { motion } from 'framer-motion';
import './Team.css';

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="team__grid-bg" aria-hidden="true" />

      <motion.div
        className="team__content"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-tag team__tag">OUR TEAM</span>
        <h2 className="team__glitch" data-text="404: TEAM NOT FOUND">
          404: TEAM NOT FOUND
        </h2>
        <p className="team__sub">
          Our team is out there somewhere building the future — they just
          haven&apos;t sent us their photos and bios yet.
        </p>
        <p className="team__sub2">
          Section reserved. Faces &amp; names loading soon.
        </p>

        <div className="team__cards">
          {[1, 2, 3, 4].map((i) => (
            <div className="team__card" key={i}>
              <span>?</span>
            </div>
          ))}
        </div>

        <span className="team__status font-mono">
          <span className="team__dot" /> STATUS: PENDING TEAM COOPERATION
        </span>
      </motion.div>
    </section>
  );
}
