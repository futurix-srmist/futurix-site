import { motion } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__grid">
        <motion.div
          className="about__lead"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="section-tag">WHO WE ARE</span>
          <h2 className="about__heading">
            The official <span className="grad-text">CTECH</span> association
            of SRMIST&nbsp;KTR.
          </h2>
        </motion.div>

        <div className="about__body">
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
          >
            FUTURIX is the official student association of the Department of
            Computing Technologies at SRMIST. It is a community of students
            who believe in learning beyond classrooms, building beyond ideas,
            and creating beyond expectations.
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            Futurix brings together passionate minds through technology,
            innovation, creativity, collaboration, and entrepreneurship. From
            hackathons and ideathons to tech talks, workshops, and
            large-scale events, Futurix provides students with a platform to
            learn, experiment, lead, and build.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
            className="about__pillars"
          >
            {['Innovation', 'Technology', 'Future'].map((word) => (
              <span key={word} className="about__pillar">
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="about__frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
