import React, { useEffect, useState } from "react";
import "../../index.css";
import { useTranslation } from "react-i18next";
import logoBlue from "../../assets/logoBlue.png";
import Lang from "./Lang";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [src, setSrc] = useState(`${import.meta.env.BASE_URL}logo1.png`);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    function handleScroll() {
      const newSrc =
        window.scrollY > 600
          ? logoBlue
          : `${import.meta.env.BASE_URL}logo1.png`;

      if (newSrc !== src) {
        setFade("fade-out");

        setTimeout(() => {
          setSrc(newSrc);
          setFade("fade-in");
        }, 300);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [src]);

  const { t } = useTranslation();

  //added 12/12

  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowSidebar(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${showSidebar ? "visible" : "hidden"}`}>
      <img
        src={src}
        alt="comp logo"
        className={`logo-comp ${fade}`}
        id="logo-comp"
      />

      <header>
        <nav>
          <ul>
            <li>
              <HashLink smooth to="/#PVIP">
                {t("header.pvip")}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Benefit">
                {t("header.benefits")}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#RequiredDocuments">
                {t("header.requirements")}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Contact">
                {t("header.contact")}
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
      <Lang />
    </div>
  );
}

export default Header;
