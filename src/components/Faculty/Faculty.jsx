import { motion } from 'framer-motion';
import './Faculty.css';

const FACULTY = [
  {
    name: 'Dr. B. Kanisha',
    role: 'Convenor, FUTURIX',
    sub: 'Associate Professor, Department of Computing Technologies',
    image: '/faculty_images/Kanisha.jpg',
    bio: [
      'Dr. B. Kanisha is an Associate Professor with 22+ years of teaching and research experience, specializing in Artificial Intelligence, Machine Learning, Speech Processing, and Blockchain Technology.',
      'With extensive academic and industry collaboration experience, including projects with Samsung Research Institute and Apollo Tyres Pvt. Ltd., she has contributed to impactful research, publications, patents, and technology-driven initiatives.',
      'As the Convenor of FUTURIX, Dr. Kanisha plays a key role in shaping the association\u2019s vision and creating opportunities through hackathons, ideathons, industry collaborations, research initiatives, and internship-oriented programs.',
    ],
  },
  {
    name: 'Dr. S. Ramesh',
    role: 'Co-Convenor, FUTURIX',
    sub: 'Assistant Professor, Department of Computing Technologies',
    image: '/faculty_images/Ramesh.jpg',
    bio: [
      'Dr. S. Ramesh is an Assistant Professor with 18+ years of teaching and academic experience, with expertise in Computer Networks, Wireless Networks, Network Security, IoT, and Quantum Computing.',
      'He holds a Ph.D. in Information and Communication Engineering from Anna University and has contributed to numerous national and international journals and conferences. He is also a lifetime member of ISTE and IE.',
      'As the Co-Convenor of FUTURIX, Dr. Ramesh supports the association\u2019s technical and academic initiatives, mentoring students to explore emerging technologies, research, innovation, and collaborative problem-solving.',
    ],
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="section faculty">
      <div className="faculty__header">
        <span className="section-tag">FACULTY LEADERSHIP</span>
        <h2 className="faculty__heading">
          Meet our <span className="grad-text">faculty leadership.</span>
        </h2>
        <p className="faculty__intro">
          FUTURIX is guided by dedicated faculty mentors who bring together
          academic expertise, industry experience, research, and a passion
          for student innovation.
        </p>
      </div>

      <div className="faculty__list">
        {FACULTY.map((f, i) => (
          <motion.div
            className="faculty__card"
            key={f.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="faculty__photo">
              <img
                src={f.image}
                alt={`Portrait of ${f.name}`}
                className="faculty__photo-img"
              />
              <div className="faculty__photo-corner" />
            </div>
            <div className="faculty__info">
              <h3>{f.name}</h3>
              <p className="faculty__role">{f.role}</p>
              <p className="faculty__sub">{f.sub}</p>
              {f.bio.map((p, idx) => (
                <p className="faculty__bio" key={idx}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="faculty__together"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <h3>Together, they guide FUTURIX</h3>
        <p>
          With complementary expertise spanning AI, Machine Learning,
          Networking, Cybersecurity, IoT, Research, and Emerging
          Technologies, our faculty leadership provides students with the
          guidance and platform to learn, innovate, build, and lead.
        </p>
        <p className="faculty__together-line">
          Their mentorship. Our ideas. The future we build together.
        </p>
      </motion.div>
    </section>
  );
}
