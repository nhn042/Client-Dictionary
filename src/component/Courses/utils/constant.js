import i18next from "i18next";
import React from "react";

export const emptyTable = () => (
  <div
    style={{
      color: "#45526C",
      fontWeight: "normal",
      fontSize: "20px",
    }}
  >
    {i18next.t("auth.common.emptyDataTable")}
  </div>
);

export const DEFAULT_ROW_PER_PAGE = 10;

export const DEFAULT_ROW_PER_PAGE_OPTIONS = () => ({
  label: `${DEFAULT_ROW_PER_PAGE} / ${i18next.t("auth.common.page")}`,
  value: DEFAULT_ROW_PER_PAGE,
});
