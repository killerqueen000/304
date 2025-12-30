import { useState } from "react";
import bgImg from "../../assets/55.jpg";
import { useTranslation } from "react-i18next";
import options from "../../text/en/country.json";
import Select from "react-select";

function ContactUs() {
  const [selectedOption, setSelectedOption] = useState(null);

  const formattedOptions = options.map(({ name, code }) => ({
    label: name,
    value: code,
  }));

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      marginTop: 0,
      maxHeight: "400px",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "400px",
      overflowY: "auto",
    }),
  };

  const { t } = useTranslation();

  return (
    <div
      id="Contact"
      className="contact-us"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form className="contact-border">
        <div className="comp-name">
          <p>{t("contactUs.compName")}</p>
        </div>
        <section className="s1">
          <p>{t("contactUs.p")}</p>
          <span>{t("contactUs.span")}</span>
        </section>

        <section className="qna">
          <section className="qna-1">
            <label htmlFor="name">{t("contactUs.name")}</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder={t("placeholder.first-name")}
              required
            />
            <input
              type="text"
              name="name"
              placeholder={t("placeholder.last-name")}
              required
            />
          </section>

          <section className="qna-1">
            <label htmlFor="contact">{t("contactUs.contact")}</label>
            <br />
            <input
              type="tel"
              name="contact"
              placeholder={t("placeholder.phone-no")}
              required
            />
            <input
              type="email"
              name="contact"
              placeholder={t("placeholder.email")}
              required
            />
          </section>

          <section className="qna-1">
            <label htmlFor="country">{t("contactUs.from")}</label>
            <br />
            <Select
              name="country"
              id="country"
              value={selectedOption}
              onChange={(option) => setSelectedOption(option)}
              options={formattedOptions}
              styles={customStyles}
              menuPlacement="bottom"
              className="qna-1-select"
              required
            />
          </section>

          <button type="submit" className="button-submit">
            <p>{t("contactUs.submit")}</p>
          </button>

          <section className="tnc">
            <div className="tnc-s">
              <input type="checkbox" name="tnc" id="tnc" required/>
            </div>
            <div className="tnc-s">
              <label htmlFor="tnc">{t("contactUs.tnc")}</label>
            </div>
          </section>
        </section>
      </form>
    </div>
  );
}

export default ContactUs;
