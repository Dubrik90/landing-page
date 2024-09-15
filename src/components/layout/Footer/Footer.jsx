import React from "react";
import { ReactComponent as TelegramIcon } from "@assets/icons/telegram.svg";
import { ReactComponent as InstagramIcon } from "@assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "@assets/icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "@assets/icons/email.svg";
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">VEON-TECH</div>
        <div className="social-icons">
          <a
            href="https://t.me/veon_tech"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <TelegramIcon className="icon scaled" />
          </a>
          <a
            href="https://www.instagram.com/veontech.ru?igsh=Z21lMmc5aXJsdnhu"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <InstagramIcon className="icon scaled" />
          </a>
          <a
            href="https://www.linkedin.com/company/veon-tech/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedinIcon className="icon scaled" />
          </a>
          <a
            href="mailto:clients@veon-tech.ru"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <EmailIcon className="icon scaled" />
          </a>
        </div>
      </div>

      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className='footer-block'>
          <p>ООО "Веон-колсант"</p>
          <p>УНП 193082231</p>
        </div>
        <div className='footer-block'>
          <a href="tel:+375293097100">+375 29 309-71-00 </a>
          <a rel="noreferrer" target={"_blank"} href={`mailto:clients@veon-tech.ru`}>clients@veon-tech.ru</a>
          <p>220068, г. Минск, ул. Сурганова, 57б, офис 187</p>
        </div>
        <div className='footer-block'>
          <p>
            Copyright
            &copy; <span>&nbsp;&nbsp;VEON-TECH</span> Ltd
          </p>
          <p>All rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
