import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import data from "../text/en/text.json"

function SnsButton() {
  const { t } = useTranslation();

  const number = data.whatsapp.number;
  const message = encodeURIComponent(data.whatsapp.message);

  return (
    <div className="sns-button">
      <a
        href={`https://wa.me/${number}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="icon-whhatsapp" />
        <span>{t("misc.contact-us")}</span>
      </a>
    </div>
  );
}

export default SnsButton;
