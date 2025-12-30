import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import f2 from "../../assets/footer/immi.svg";
import f1 from "../../assets/footer/jataNegara.png";
import f3 from "../../assets/footer/LOGORIZ.png";
import f4 from "../../assets/footer/visa.png";
import link from "../../text/en/text.json";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const number = link.whatsapp.number;
  const message = encodeURIComponent(link.whatsapp.message);
  return (
    <footer>
      <div className="f-container">
        <section className="f-c1">
          <img src={f1} alt="jata-negara-logo" className="f-img1" />
          <img src={f2} alt="immigration-logo" className="f-img2" />
          <img src={f3} alt="riz-logo" className="f-img3" />
          <img src={f4} alt="pvip-logo" className="f-img4" />
        </section>
        <div>
          <h1>{t("footer.name")}</h1>
          {/*hyperlinks sns n contact*/}
          <div className="f-s1">
            <section className="f-hl">
              <address>
                <a href={link.footer.hyperlinks.immi} target="_blank">
                  <span>{t("footer.titleHyperlinks.immi")}</span>
                </a>
              </address>
              <address>
                <a href={link.footer.hyperlinks.pvip} target="_blank">
                  <span>{t("footer.titleHyperlinks.pvip")}</span>
                </a>
              </address>
              <address>
                <a href={link.footer.hyperlinks.tourism} target="_blank">
                  <span>{t("footer.titleHyperlinks.tourism")}</span>
                </a>
              </address>
              
              <address>
                 <Link to="/about" className="link">
                 <span>{t("misc.about-us")}</span>
                 </Link>
                
              </address>
            </section>
            <section className="f-blank-space"></section>
            <section className="f-sns">
              <a
                href={`https://wa.me/${number}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp id="f-icon" />
              </a>
              <a href="">
                <FaTwitter id="f-icon" />
              </a>
              <a href="">
                <FaFacebook id="f-icon" />
              </a>
            </section>
            <section className="f-con">
              <div className="f-con1">
                <section className="pp">
                  <p>{t("footer.contactUs")}</p>
                </section>
                <section className="f-con2">
                  <address>
                    <MdOutlineLocalPhone className="f-icon-c" />
                    <p>{t("footer.phoneNum")}</p>
                  </address>
                  <address>
                    <MdOutlineMail className="f-icon-c" />
                    <p>{t("footer.email")}</p>
                  </address>
                  <address>
                    <FiMapPin className="f-icon-cs" />
                    <p>{t("footer.address")}</p>
                  </address>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="f-credit">
        <hr />
        <p>{t("footer.credit")}</p>
      </div>
    </footer>
  );
}

export default Footer;
