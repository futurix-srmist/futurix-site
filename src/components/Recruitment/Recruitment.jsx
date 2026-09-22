import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode';
import './Recruitment.css';

const RECRUITMENT_FORM_URL =
  'https://forms.gle/Zov5D1mXkRgSd8sd7';

function RecruitmentQR({ url }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const size = 180;
    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;

    // Step 1: render QR onto an offscreen canvas with
    // black (opaque) modules and transparent background.
    const offscreen = document.createElement('canvas');
    QRCode.toCanvas(offscreen, url, {
      width: size,
      margin: 2,
      color: {
        dark: '#000000ff',   // fully opaque — used as alpha mask
        light: '#00000000',  // fully transparent background
      },
      errorCorrectionLevel: 'H',
    }).then(() => {
      const ctx = canvas.getContext('2d');

      // Step 2: paint the magenta → violet gradient across the whole canvas.
      const grad = ctx.createLinearGradient(0, 0, size, size);
      grad.addColorStop(0, '#ff2ea6');  // --magenta-hot
      grad.addColorStop(1, '#8b5cf6'); // --violet
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);

      // Step 3: use the QR image as an alpha mask so only
      // the module pixels keep the gradient color.
      ctx.globalCompositeOperation = 'destination-in';
      ctx.drawImage(offscreen, 0, 0);

      // Reset for any future draws.
      ctx.globalCompositeOperation = 'source-over';
    });
  }, [url]);

  return (
    <canvas
      ref={canvasRef}
      className="recruitment__qr-canvas"
      aria-label="QR code — scan to open the application form"
    />
  );
}

export default function Recruitment() {
  return (
    <section
      id="recruitment"
      className="section recruitment"
    >
      <motion.div
        className="recruitment__inner"

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: false,
          amount: 0.35,
        }}

        transition={{
          duration: 0.7,
        }}
      >
        <span className="section-tag">
          RECRUITMENT
        </span>

        <h2 className="recruitment__heading">
          Ready to build what&apos;s{' '}
          <span className="grad-text">
            next?
          </span>
        </h2>

        <p className="recruitment__tagline">
          Bring your ideas, curiosity, and energy.
          Join FUTURIX and turn your potential
          into something real.
        </p>

        <a
          className="recruitment__button"
          href={RECRUITMENT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>APPLY NOW</span>

          <span
            className="recruitment__arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>

        {/* QR Code fallback — scan only, not clickable */}
        <div className="recruitment__qr-wrapper">
          <p className="recruitment__qr-label">
            or scan the QR code
          </p>

          <div className="recruitment__qr-border">
            <RecruitmentQR url={RECRUITMENT_FORM_URL} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}