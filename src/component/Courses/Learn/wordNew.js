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
import ChevronUpCircleIcon from "@atlaskit/icon/glyph/chevron-up-circle";
import ChevronDownCircleIcon from "@atlaskit/icon/glyph/chevron-down-circle";
import { Collapse, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DynamicTable from "@atlaskit/dynamic-table";
import EditorSearchIcon from "@atlaskit/icon/glyph/editor/search";
import { Field } from "@atlaskit/form";
import Select from "@atlaskit/select";
import { TableResponsive, ACCESS_LEVEL_OPTIONS } from "./constant";

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

const WordNew = () => {
  const classes = useStyles();
  const [checkIsLoading, setIsLoading] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const { t } = useTranslation();

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleAddWord = () => {
    console.log(1111);
    setIsLoading(true);
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
        key: "Loại Từ",
        "data-align": "center",
        content: <div className={classes.tableHeader}>{t("word.dokho")}</div>,
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

  const newData = [
    {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
  ];
  const getRows = () => {
    console.log(11111);
    const rows = newData?.map((detail) => {
      const itemKey = detail?.key;
      const dataRow = {
        key: itemKey,
        cells: [
          {
            key: "Tiếng Việt",
            content: (
              <div className={classes.displayName}>
                <div>{detail?.a}</div>
              </div>
            ),
          },
          {
            key: "Tiếng Tày",
            content: (
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                {detail?.b}
              </div>
            ),
          },
          {
            key: "Loại Từ",
            "data-align": "center",
            content: <div>{detail?.c}</div>,
          },
          {
            key: "Miêu Tả",
            "data-align": "center",
            content: <div>{detail?.d}</div>,
          },
        ],
      };
      return dataRow;
    });
    setTableRows(rows);
  };
  useEffect(() => {
    getRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [newData]);

  return (
    <div className={classes.container}>
      <div className={classes.buttonSearch}>
        <div className={classes.bottom}>
          <div className={classes.inputForm}>
            <span>{t("word.viet")}</span>
            <Textfield className={classes.input} />
          </div>
          <div className={classes.inputForm}>
            <span>{t("word.tay")}</span>
            <Textfield className={classes.input} />
          </div>
          <div className={classes.inputForm}>
            <span>{t("word.description")}</span>
            <Textfield className={classes.input} />
          </div>
          <div className={classes.searchItem}>
            <span>{t("word.dokho")}</span>
            <Select 
              inputId="single-select-example"
              // className="single-select"
              classNamePrefix="react-select"
              options={[
                { label: "Dễ", value: "danh từ" },
                { label: "Thường", value: "động từ" },
                { label: "Khó", value: "tính từ" },
              ]}
            />
          </div>
        </div>
        <div>
          <LoadingButton
            appearance="primary"
            isLoading={checkIsLoading}
            onClick={handleAddWord}
          >
            {t("word.sub")}
          </LoadingButton>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.collapseHeader}>
          <div style={{ display: "flex", flexDirection: "row", gap: "60px" }}>
            <h4 className={classes.title}>{t("word.Note")}</h4>
            <div className={classes.kindOf}>
              <span style={{ marginTop: "5px" }}>
                <ListIcon primaryColor="#3F8425" />
              </span>
              <span className={classes.hover}>{t("word.de")}</span>
              <span className={classes.hover}>{t("word.binhthuong")}</span>
              <span className={classes.hover}>{t("word.kho")}</span>
            </div>
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
              rowsPerPage={2}
              defaultPage={1}
              // emptyView={emptyTable()}
              page={currentPage}
              // isLoading={isFetchingData}
              loadingSpinnerSize="large"
            />
          </TableResponsive>
        </Collapse>
      </div>
    </div>
  );
};

export default WordNew;
