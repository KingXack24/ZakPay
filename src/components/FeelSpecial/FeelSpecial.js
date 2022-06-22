import React from 'react'
import Button from '../common/Button/Button'
import "./FeelSpecial.css"

const FeelSpecial = () => {
  return (

    <div className="feel-special  photo-section">
    <div className="max-width">
      <div className="photo-section-child">
        <div className="photo-section-top dynamic-margin">
          <div className="photo-section-heading">
            feel special more often.
          </div>
          <div className="photo-section-subheading">
            exclusive rewards for paying your bills
          </div>
        </div>
        <div className="photo-section-bottom dynamic-margin">
          <div className="photo-section-description">
            every time you pay your credit card bills on ZAKPAY, you receive
            ZAKPAY coins. you can use these to win exclusive rewards or get
            special access to curated products and experiences. on ZAKPAY, good
            begets good.
          </div>
          <div className="photo-section-button">
            <Button buttonText="Explore rewards" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default FeelSpecial