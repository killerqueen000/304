import React from "react";
import { useTranslation } from "react-i18next";
import Table from "./Table";

function PVIPTable() {
  const { t } = useTranslation();

  const rows = t("table1.rows", { returnObjects: true });

  const numbers = Object.keys(rows);
  const descriptions = Object.values(rows);

  return <Table numbers={numbers} descriptions={descriptions} />;
}

export default PVIPTable;
