import { useTranslation } from "react-i18next";
import langList from "../text/en/lang.json";
import { useState } from "react";

function Dropdown({close}) {
  const { i18n } = useTranslation();

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    close();
  };

  return (
    <div className="lang-dropdown">
      <ul>
        {langList.map((info) => (
          <li
            key={info.id}
            onClick={() => changeLang(info.code)}
            className={i18n.language === info.code ? "active" : ""}
          >
            {info.lang}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Dropdown;
