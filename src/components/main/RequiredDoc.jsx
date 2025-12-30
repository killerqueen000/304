import React from "react";
import { useTranslation } from "react-i18next";
import TableDoc from "../TableDoc";

function RequiredDoc() {
  const {t} = useTranslation();
  return (
    <>
      <div id="RequiredDocuments">
        <span className="benefit-desc req">{t("requiredDoc.title1")}</span>
      </div>
      <TableDoc />
      
    </>
  );
}

export default RequiredDoc;
