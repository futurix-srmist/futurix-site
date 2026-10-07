import React from 'react';
import './RecruitmentBanner.css';

const RecruitmentBanner = () => {

  const bannerContent = (
    <>
      <span className="highlight">
        ✦ REGISTRATIONS CLOSED
      </span>

      <span className="separator">•</span>

      <span>
        THANK YOU FOR YOUR INTEREST
      </span>

      <span className="separator">•</span>

      <span>
        FUTURIX · SRMIST KTR
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



    </div>
  );
};

export default RecruitmentBanner;