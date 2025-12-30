import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Dropdown from "../../Dropdown";
import { HashLink } from "react-router-hash-link";

function SidebarItem({ isOpen, onClose }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className={`overlay ${isOpen ? "active" : ""}`} onClick={onClose} />

      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          <IoChevronForward />
        </button>
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
          <div>
            <button className="sidebar-lan" onClick={() => setOpen(!open)}>
              Language
            </button>
            {open && <Dropdown />}
          </div>
        </ul>
      </div>
    </>
  );
}

export default SidebarItem;
