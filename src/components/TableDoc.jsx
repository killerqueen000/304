import React from "react";
import { useTranslation } from "react-i18next";

function TableDoc() {
  const { t } = useTranslation();

  const headers = t("docTable.headers", { returnObjects: true });
  const rows = t("docTable.rows", { returnObjects: true });

  return (
    <div className="doc-div">
      <table className="doc-table doc-table-striped">
        <thead>
          <tr>
            <th>{headers.items}</th>
            <th>{headers.application}</th>
            <th>{headers.details}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.items}</td>
              <td>{row.application}</td>
              <td>{row.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDoc;
