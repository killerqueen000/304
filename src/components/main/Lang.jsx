import Dropdown from "../Dropdown";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import langList from "../../text/en/lang.json"
import "../../index.css";

function Lang() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

  // get current language object
  const currentLang =
    langList.find((lang) => lang.code === i18n.language) || langList[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-con" ref={dropdownRef}>
      <button className="lang" onClick={() => setOpen(!open)}>
        {currentLang.code}
      </button>
      {open && <Dropdown close={() => setOpen(false)} />}
    </div>
  );
}

export default Lang;
