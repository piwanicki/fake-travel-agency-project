import React, { useState } from 'react'
import classes from './Footer.module.scss'
import CustomInput from '../../../UI/CustomInput/CustomInput'
import CustomButton from '../../../UI/CustomButton/CustomButton'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'

const Footer = props => {
  const [showPP, setShowPP] = useState(false)

  const signNewsLetterHandler = () => {
    console.log(`signed`)
  }

  return (
    <div className={classes.Footer}>
      <div className={classes.FooterContent}>
        <div className={classes.AboutUsSection}>
          <p>About us</p>
          <ul>
            <li> About us </li>
            <li> Contact </li>
            <li> Agency locations </li>
            <li> Career </li>
          </ul>
        </div>

        <div className={classes.GuideSection}>
          <p>Help</p>
          <ul>
            <li> Agreement </li>
            <li> Personal data </li>
            <li> Service regulations </li>
            <li> Reservation - step by step </li>
            <li> FAQ </li>
            <li> Airlines </li>
          </ul>
        </div>

        <div className={classes.socialContact}>
          <p>Find us</p>
          <ul>
            <li>Facebook </li>
            <li>Youtube </li>
            <li>Linkedin </li>
            <li>Instagram </li>
          </ul>
        </div>
      </div>

      <div className={classes.NewsLetterContainer}>
        <span className={classes.JoinDesc}>
          Join to our newsletter and receive new offers and special promotions!
        </span>
        <CustomInput
          type='email'
          placeholder=' Your email address...'
          className={classes.newsLetterInput}
        />
        <CustomButton onClick={signNewsLetterHandler}> Join </CustomButton>
        <br />
        *By clicking the 'Join' button you confirm that you have read the &nbsp;
        <span
          className={classes.PrivPolicyBtn}
          onClick={() => setShowPP(!showPP)}
        >
          Privacy Policy.
        </span>
      </div>
      {showPP ? (
        <PrivacyPolicy showPPHandler={() => setShowPP(!showPP)} />
      ) : null}
    </div>
  )
}

export default Footer
