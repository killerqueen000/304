import React from "react";
import { useTranslation } from "react-i18next";
import bgImg from "../../assets/22.jpg";
import "../../index.css";

function Pvip() {
  const { t } = useTranslation();
  return (
    <div id="PVIP">
      <div className="container-pvip">
        <section className="welcome">
          <h1>{t("pvip.title1")}</h1>
          <p>{t("pvip.welcome-to-malaysia")}</p>
        </section>
        <section className="about-pvip">
          <h1>{t("pvip.title2")}</h1>
          <p>{t("pvip.about-pvip")}</p>
        </section>
      </div>
      <div
        className="img-2"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default Pvip;
