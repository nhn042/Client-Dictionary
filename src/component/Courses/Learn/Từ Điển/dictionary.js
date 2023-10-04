import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useTranslation } from "react-i18next";
import LoadingButton from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import ListIcon from "@atlaskit/icon/glyph/list";
import Pagination from '@atlaskit/pagination'
import ChevronUpCircleIcon from "@atlaskit/icon/glyph/chevron-up-circle";
import ChevronDownCircleIcon from "@atlaskit/icon/glyph/chevron-down-circle";
import { Collapse, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DynamicTable from "@atlaskit/dynamic-table";
import EditorSearchIcon from "@atlaskit/icon/glyph/editor/search";
import { Field } from "@atlaskit/form";
import Select from "@atlaskit/select";
import { TableResponsive, ACCESS_LEVEL_OPTIONS } from "../../constant";
import {
  getAllWordDictionary,
  handleGetAllWord,
  handleUpdateWord,
} from "../../../../services/userService";
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
  kindOf: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    alignItems: "center",
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchWrapper: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "100%",
    marginBottom: "0",
    gap: "8px",
    paddingTop: "1rem",
    paddingBottom: "30px",
    alignItems: "center",
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
  errorMessageContainer: {
    color: "#D92929",
    fontSize: "16px",
    marginBottom: "15px",
    display: "flex",
  },
  sucessMessageContainer: {
    color: "#1fd91f",
    fontSize: "16px",
    marginBottom: "15px",
    display: "flex",
  },
  title: {
    fontSize: "24px",
  },
  input: {
    width: "100%",
    height: "2em !important",
    marginTop: "8px",
  },
  searchItem: {
    // flex: 1,
    minWidth: 230,
    fontSize: "14px",
    "& > div > div": {
      overflow: "visible !important",
      background: "white",
      border: "none",
    },
    "& > div > div > div > div": {
      marinTop: "-6px",
    },
    "@media screen and (max-width: 1024px)": {
      flex: 1,
    },
    '& input[name="keyword"]': {
      height: 12,
    },
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
  const [checkIsLoading, setIsLoading] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [dataFinal, setDataFinal] = useState([]);
  const [wordViet, setWordViet] = useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sucessMessage, setSucessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    DEFAULT_ROW_PER_PAGE_OPTIONS()
  );
  const { t } = useTranslation();
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleGetWord = async () => {
    let wordData = await getAllWordDictionary();
    setDataFinal(wordData.data);
  };
  console.log("dataFinal", dataFinal);
  const handleFindWord = async () => {};

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage(false);
      setSucessMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage, sucessMessage]);

  return (
    <div className={classes.container}>
      <div className={classes.buttonSearch}>
        <div className={classes.bottom}>
          <div className={classes.inputForm}>
            <span>{t("word.Search")}</span>
            <Textfield
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
            isLoading={checkIsLoading}
            onClick={handleFindWord}
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
              // isLoading={isFetchingData}
              loadingSpinnerSize="large"
            />
          </TableResponsive>
          {dataFinal.length === 0 && (
          <div className={classes.pagination}>
            <Pagination
              defaultSelectedIndex={currentPage - 1}
              selectedIndex={currentPage - 1}
              pages={Array.from(
                {
                  length: totalPages,
                },
                (_v, i) => i + 1,
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
