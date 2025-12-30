import { IoIosArrowForward } from "react-icons/io";
import ShinyText from "./ShinyText";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AboutUsButton() {
  const { t } = useTranslation();
  return (
    <Link to="/about" className="link">
      <button className="button-about-us">
        <ShinyText
          text={t("misc.about-us")}
          disabled={false}
          speed={3}
          className="shiny-text"
        />
        <IoIosArrowForward className="icon-arrow" />
      </button>
    </Link>
  );
}

export default AboutUsButton;
