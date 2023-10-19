import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group'
import { useNavigate } from "react-router-dom";
import WordNew1 from "./learnCulture";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "row",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  rightBox: {
    width: "90%",
    borderLeft: "2px solid #ffa50078",
  },
  leftBox: {
    display: "flex",
    flexDirection: "column",
    width: "10%",
  },
  textLeft: {
    margin: "10px 0px",
    gap: "10px",
    display: "flex",
    marginTop: "20px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.86rem",
    fontWeight: "500",
    "&:hover": {
      cursor: "pointer",
      color: "#0d87f0",
    },
  },
}));
const Character = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickBook = () => {
    navigate("/introduce/culture", { replace: true });
  };
  const handleClickWord = () => {
    navigate("/introduce/dictionary", { replace: true });
  };
  const handleClickContent = () => {
    navigate("/introduce/content", { replace: true });
  };
  const handleClickVideo = () => {
    navigate("/introduce/video", { replace: true });
  };
  return (
    <div className={classes.container}>
      <div className={classes.leftBox}>
        <span onClick={handleClickBook} className={classes.textLeft}>
          <PeopleGroupIcon size="large" label="" /> {t("introduce.fulture")}
        </span>
        {/* <span onClick={handleClickWord} className={classes.textLeft}>
          <SuitcaseIcon size="large" label="" /> {t("word.Dictionary")}
        </span>
        <span onClick={handleClickContent} className={classes.textLeft}>
          <EditFilledIcon size="large" label="" /> {t("word.Content")}
        </span>
        <span onClick={handleClickVideo} className={classes.textLeft}>
          {" "}
          <ScreenIcon size="large" label="" />
          {t("word.video")}
        </span> */}
      </div>
      <div className={classes.rightBox}>
        <WordNew1 />
      </div>
    </div>
  );
};

export default Character;
