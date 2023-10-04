import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import LoadingButton from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import Pagination from "@atlaskit/pagination";
import ChevronUpCircleIcon from "@atlaskit/icon/glyph/chevron-up-circle";
import ChevronDownCircleIcon from "@atlaskit/icon/glyph/chevron-down-circle";
import { Collapse, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DynamicTable from "@atlaskit/dynamic-table";
import { TableResponsive } from "../../constant";
import { getAllWordDictionary } from "../../../../services/userService";
import {
  DEFAULT_ROW_PER_PAGE,
  emptyTable,
  DEFAULT_ROW_PER_PAGE_OPTIONS,
} from "../../utils/constant";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
  },
  top: {
    height: "20%",
    width: "100%",
  },
  bottom: {
    width: "100%",
    marginBottom: "25px",
    marginTop: "25px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  buttonSearch: {
    marginBottom: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    padding: "1rem 2rem",
    border: "0.5px solid #C1C7D0",
    borderRadius: 8,
    marginBottom: "2rem",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  inputForm: {
    width: "200px",
  },
  collapseHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > h4": {
      margin: 0,
    },
  },
  title: {
    fontSize: "24px",
  },
  input: {
    width: "100%",
    height: "2em !important",
    marginTop: "8px",
  },
  tableHeader: {
    display: "flex",
    minHeight: 40,
    padding: 4,
    alignItems: "center",
    justifyContent: "space-between",
    borderRight: "2px #e2e2e2 solid",
    fontSize: 14,
  },
}));

const Dictionary = () => {
  const classes = useStyles();
  const [checkIsLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [dataFinal, setDataFinal] = useState([]);
  const [dataMain, setDataMain] = useState([]);
  const [wordViet, setWordViet] = useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    DEFAULT_ROW_PER_PAGE_OPTIONS()
  );
  const { t } = useTranslation();
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleGetWord = async () => {
    setIsLoading(true)
    let wordData = await getAllWordDictionary();
    setDataFinal(wordData.data);
    setDataMain(wordData.data);
    setIsLoading(false)
  };

  const handleSearch = (key, value) => {
    const newData = dataMain.filter((item) =>
      item.viet?.toLowerCase().includes(value || "")
    );
    setDataFinal(newData);
  };

  const handleFormatData = async () => {
    const newData = dataMain.filter((item) =>
      item.viet?.toLowerCase().includes(wordViet || "")
    );
    setDataFinal(newData);
  };

  const head = {
    cells: [
      {
        key: "Tiếng Việt",
        content: <div className={classes.tableHeader}>{t("word.viet")}</div>,
      },
      {
        key: "Tiếng Tày",
        content: <div className={classes.tableHeader}>{t("word.tay")}</div>,
      },
      {
        key: "Miêu Tả",
        "data-align": "center",
        content: (
          <div className={classes.tableHeader} style={{ borderRight: "none" }}>
            {t("word.description")}
          </div>
        ),
      },
    ],
  };
  const getRows = () => {
    const rows = dataFinal?.map((detail) => {
      const itemKey = detail?.tay;
      const dataRow = {
        key: itemKey,
        cells: [
          {
            key: "Tiếng Việt",
            content: (
              <div className={classes.displayName}>
                <div>{detail?.viet}</div>
              </div>
            ),
          },
          {
            key: "Tiếng Tày",
            content: (
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                {detail?.tay}
              </div>
            ),
          },
          {
            key: "Miêu Tả",
            "data-align": "center",
            content: <div>{detail?.dacdiem}</div>,
          },
        ],
      };
      return dataRow;
    });
    setTableRows(rows);
  };
  const totalPages = useMemo(
    () =>
      Math.ceil(
        dataFinal?.length / (rowsPerPage?.value || DEFAULT_ROW_PER_PAGE)
      ) || 1,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(dataFinal), rowsPerPage]
  );
  useEffect(() => {
    getRows();
    handleGetWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    getRows();
  }, [dataFinal]);

  return (
    <div className={classes.container}>
      <div className={classes.buttonSearch}>
        <div className={classes.bottom}>
          <div className={classes.inputForm}>
            <span>{t("word.Search")}</span>
            <Textfield
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSearch("keyword", e.target.value);
              }}
              className={classes.input}
              placeholder={t("word.notetimkiem")}
              value={wordViet}
              onChange={(e) => setWordViet(e.target.value)}
            />
          </div>
        </div>
        <div>
          <LoadingButton
            appearance="primary"
            onClick={handleFormatData}
          >
            {t("word.timkiem")}
          </LoadingButton>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.collapseHeader}>
          <div style={{ display: "flex", flexDirection: "row", gap: "60px" }}>
            <h4 className={classes.title}>{t("word.Find")}</h4>
          </div>
          <div className={classes.iconGroup}>
            <Tooltip>
              <IconButton size="small" onClick={handleExpand}>
                {expanded ? (
                  <ChevronUpCircleIcon size="medium" />
                ) : (
                  <ChevronDownCircleIcon size="medium" />
                )}
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Collapse in={expanded} timeout="auto">
          <TableResponsive style={{ marginTop: "25px" }}>
            <DynamicTable
              head={head}
              rows={tableRows}
              rowsPerPage={rowsPerPage?.value}
              defaultPage={1}
              emptyView={emptyTable()}
              page={currentPage}
              isLoading={checkIsLoading}
              loadingSpinnerSize="large"
            />
          </TableResponsive>
          {dataFinal.length !== 0 && (
            <div className={classes.pagination}>
              <Pagination
                defaultSelectedIndex={currentPage - 1}
                selectedIndex={currentPage - 1}
                pages={Array.from(
                  {
                    length: totalPages,
                  },
                  (_v, i) => i + 1
                )}
                onChange={(data, page) => setCurrentPage(page)}
              />
            </div>
          )}
        </Collapse>
      </div>
    </div>
  );
};

export default Dictionary;
