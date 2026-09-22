import React from 'react';
import './RecruitmentBanner.css';

const RecruitmentBanner = () => {
  const scrollToRecruitment = () => {
    const section = document.getElementById('recruitment');

    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'instant' });
    }
  };

  const bannerContent = (
    <>
      <span className="highlight">
        ✦ RECRUITMENT OPEN
      </span>

      <span className="separator">•</span>

      <span>
        BUILD THE FUTURE WITH US
      </span>

      <span className="separator">•</span>

      <span>
        JOIN FUTURIX
      </span>

      <span className="separator">•</span>

      <span>
        CREATE • INNOVATE • LEAD
      </span>

      <span className="separator">•</span>
    </>
  );

  return (
    <div className="recruitment-banner">

      {/* Moving ticker */}
      <div className="recruitment-banner__viewport">

        <div className="recruitment-banner__marquee">

          <div className="recruitment-banner__group">
            {bannerContent}
          </div>

          <div className="recruitment-banner__group">
            {bannerContent}
          </div>

          <div className="recruitment-banner__group">
            {bannerContent}
          </div>

          <div className="recruitment-banner__group">
            {bannerContent}
          </div>

        </div>

      </div>

      {/* JOIN US button */}
      <button
        type="button"
        className="recruitment-banner__button"
        onClick={scrollToRecruitment}
      >
        <span>JOIN US</span>

        <span
          className="arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </button>

    </div>
  );
};

export default RecruitmentBanner;