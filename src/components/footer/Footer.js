import React from 'react'
import './Footer.css'
import { UilFacebook, UilInstagramAlt, UilGithub, UilPhone, UilEnvelopeAlt  } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className="footer-basic">
    <footer>
        <div className="social"><UilFacebook /><UilInstagramAlt /><UilGithub></UilGithub></div>
        <ul className="list-inline">
            <li className="list-inline-item"> Contact Us</li>
            <li className="list-inline-item"><UilEnvelopeAlt  /><input type="mail" /></li>
            <li className="list-inline-item"><UilPhone /><input type="number" /></li>
        </ul>
        <p className="copyright">Gym App © 2023</p>
    </footer>
</div>
  )
}

export default Footer;