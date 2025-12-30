import Header from "./Header";
import Footer from "./Footer";
import bgImg from "../../assets/6.png";
import Rlogo from "../../assets/logo-riz.png";
import { useTranslation } from "react-i18next";
import Sidebar from "./sidebar/Sidebar";

function AbousUs() {

  const {t} = useTranslation();
  return (
    <div className="about-us">
      <Sidebar />
      <Header />
      <div
        className="about-us-hero"
        style={{
          backgroundImage: `url(${bgImg}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span>{t("aboutUs.heroTitle")}</span>
      </div>

      <div className="au-desc">
        <section className="au-comp-logo">
          <img src={Rlogo} alt="riz logo" />
        </section>
        <section className="au-comp-desc">
          <h1>{t("aboutUs.compName")}</h1>
          <p>
            {t("aboutUs.desc")}
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AbousUs;
