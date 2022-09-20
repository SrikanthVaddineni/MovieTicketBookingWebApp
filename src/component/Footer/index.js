import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

import './index.css'

const Footer = () => (
  <div className="footer-card">
    <hr className="footer-line" />
    <div className="footer-media">
      <AiFillInstagram
        color="#ffffff"
        size="40"
        className="footer-icon-space"
      />
      <BsFacebook color="#ffffff" size="30" className="footer-icon-space" />
      <AiFillTwitterCircle
        color="#ffffff"
        size="35"
        className="footer-icon-space"
      />
      <AiFillYoutube color="#ffffff" size="43" className="footer-icon-space" />
    </div>
    <p className="footer-copyright">
      Copyright 2022
      <span>
        . <AiOutlineCopyrightCircle /> .
      </span>
      XYZ Pvt. Ltd. All Rights Reserved.
    </p>
  </div>
)

export default Footer
