import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import WhyJoin from './components/WhyJoin/WhyJoin';
import RecruitmentBanner from './components/RecruitmentBanner/RecruitmentBanner';
import Faculty from './components/Faculty/Faculty';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import CustomCursor from './components/CustomCursor/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />

      <ScrollProgress />

      <div className="noise-overlay" />

      <RecruitmentBanner />

      <Navbar />

      <main>
        <Hero />

        <About />

        <WhatWeDo />

        <WhyJoin />

        <Faculty />

        <Team />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;