import { motion } from 'framer-motion';
import './Contact.css';

const CHANNELS = [
  {
    label: 'Instagram',
    value: '@futurix.ctech',
    href: 'https://www.instagram.com/futurix.ctech?igsi=MXAwajM4eWJteDhjNQ==',
  },
  {
    label: 'Email',
    value: 'futurix.ctech.ktr@srmist.edu.in',
    href: 'mailto:futurix.ctech.ktr@srmist.edu.in',
  },
  {
    label: 'Contact',
    value: 'Shambhavi \u2014 +91 99713 63689',
    href: 'tel:+919971363689',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="contact__heading">
            Let&apos;s build the <span className="grad-text">next thing</span> together.
          </h2>
          <p className="contact__sub">
            Questions, collaborations, or just want to say hi to FUTURIX?
            Reach out through any channel below.
          </p>
        </motion.div>

        <div className="contact__channels">
          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact__row"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <span className="contact__label font-mono">{c.label}</span>
              <span className="contact__value">{c.value}</span>
              <span className="contact__arrow">&#8599;</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
