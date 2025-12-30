import React from "react";
import bfImg from "../../assets/33.jpg";
import priImg from "../../assets/44.jpg";
import PVIPTable from "../PVIPTable";
import { useTranslation } from "react-i18next";
import FeatureList from "../FeatureList";
import data from "../../text/en/text.json";

import "../../index.css";

function Benefit() {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="Benefit"
        style={{
          backgroundImage: `url(${bfImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="benefit-landing">
          <section className="benefit-section-1">
            <h1>{t("benefit.title1")}</h1>
            <h1 className="benefit-title11">{t("benefit.title11")}</h1>
          </section>
        </div>
      </div>

      <span className="benefit-desc">{t("benefit.tableTitle")}</span>
      <PVIPTable />
      <span className="benefit-desc">{t("privilages.title1")}</span>
      <div className="privilages ps1 title ps2">
        <section
          className="ps1"
          style={{
            backgroundImage: `url(${priImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></section>
        <section className="ps2">
          <div className="ps-2-title">
            <span>{t("privilages.title11")}</span>
            <p>//To be added//</p>
          </div>

          {/*<FeatureList items={data.privilagedList}/>*/}
        </section>
      </div>
    </>
  );
}

export default Benefit;
