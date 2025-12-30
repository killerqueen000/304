import BlurText from "../BlurText";
import { useTranslation } from "react-i18next";
import bgImg from "../../assets/klcc1.jpg";

function LandingPage() {
  const { t } = useTranslation();
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="landing-page-text">
        <h1>
          <BlurText
            delay={200}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
            text={t("landing-page.h1")}
          />
        </h1>
        <hr />
        <p>
          <BlurText
            delay={200}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
            text={t("landing-page.span")}
          />
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
