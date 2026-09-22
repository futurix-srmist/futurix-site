import logo from '../../assets/images/logo.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Futurix logo" className="footer__logo" />
          <p className="footer__tagline font-mono">Innovation. Technology. Future.</p>
        </div>

        <div className="footer__meta">
          <p>CTECH Association &middot; Department of Computing Technologies</p>
          <p>SRM Institute of Science &amp; Technology, KTR Campus</p>
        </div>

        <p className="footer__copy font-mono">
          &copy; {year} FUTURIX. All rights reserved.
        </p>
      </div>
      <div className="footer__glow" aria-hidden="true" />
    </footer>
  );
}
