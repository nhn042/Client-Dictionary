import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Collapse, IconButton, Tooltip } from "@material-ui/core";
import ChevronUpCircleIcon from "@atlaskit/icon/glyph/chevron-up-circle";
import ChevronDownCircleIcon from "@atlaskit/icon/glyph/chevron-down-circle";
import { TableResponsive, ACCESS_LEVEL_OPTIONS } from "./constant";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "50px 10px 20px 30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "50px",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      width: "285px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  collapseHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > h4": {
      margin: 0,
    },
  },
  root: {
    margin: "30px 5px 50px 10px",
    padding: "1rem 2rem",
    border: "0.5px solid #C1C7D0",
    borderRadius: 8,
  },
}));
const Content = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);
  const [isOpenNP, setIsOpenNP] = React.useState(false);
  const [isOpenTV, setIsOpenTV] = React.useState(false);
  const items = [
    {
      content: t("word.NguPhap"),
    },
    {
      content: t("word.PhatAm"),
    },
  ];
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  const handleExpandNP = () => {
    setIsOpenNP(!isOpenNP);
  };
  const handleExpandTV = () => {
    setIsOpenTV(!isOpenTV);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.collapseHeader}>
          <div>
            {" "}
            <h4 className={classes.title}>{t("word.NguPhap")}</h4>
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
          <div style={{ marginTop: "25px" }}>aaaaa</div>
        </Collapse>
      </div>
      <div className={classes.root}>
        <div className={classes.collapseHeader}>
          <div>
            {" "}
            <h4 className={classes.title}>{t("word.PhatAm")}</h4>
          </div>
          <div className={classes.iconGroup}>
            <Tooltip>
              <IconButton size="small" onClick={handleExpandNP}>
                {isOpenNP ? (
                  <ChevronUpCircleIcon size="medium" />
                ) : (
                  <ChevronDownCircleIcon size="medium" />
                )}
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Collapse in={isOpenNP} timeout="auto">
          <div style={{ marginTop: "25px" }}>aaaaa</div>
        </Collapse>
      </div>
      <div className={classes.root}>
        <div className={classes.collapseHeader}>
          <div>
            {" "}
            <h4 className={classes.title}>{t("word.TuVung")}</h4>
          </div>
          <div className={classes.iconGroup}>
            <Tooltip>
              <IconButton size="small" onClick={handleExpandTV}>
                {isOpenTV ? (
                  <ChevronUpCircleIcon size="medium" />
                ) : (
                  <ChevronDownCircleIcon size="medium" />
                )}
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Collapse in={isOpenTV} timeout="auto">
          <div style={{ marginTop: "25px" }}>aaaaa</div>
        </Collapse>
      </div>
    </>
  );
};

export default Content;
