import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ScreenIcon from "@atlaskit/icon/glyph/screen";
import QueuesIcon from "@atlaskit/icon/glyph/queues";
import { makeStyles } from "@material-ui/core/styles";
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled'
import WordNew from "./Learn/wordNew";
import Video from "./Learn/video";
import Content from "./Learn/Content";

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
const Courses = () => {
  const classes = useStyles();
  const [isWord, setIsWord] = useState(true);
  const [isContent, setIsContent] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const { t } = useTranslation();

  const handleClickWord = () => {
    setIsVideo(false);
    setIsContent(false)
    setIsWord(true);
  }
  const handleClickContent = () => {
    setIsContent(true)
    setIsWord(false);
    setIsVideo(false);
  }
  const handleClickVideo = () => {
    setIsWord(false);
    setIsContent(false)
    setIsVideo(true);
  }
  return (
    <div className={classes.container}>
      <div className={classes.leftBox}>
      <span onClick={handleClickWord} className={classes.textLeft}>
          <QueuesIcon size="large" label="" /> {t("word.Note")}
        </span>
        <span onClick={handleClickContent} className={classes.textLeft}>
          <EditFilledIcon size="large" label="" /> {t("word.Content")}
        </span>
        <span onClick={handleClickVideo} className={classes.textLeft}>
          {" "}
          <ScreenIcon size="large" label="" />
          {t("word.video")}
        </span>
        <span></span>
        <span></span>
      </div>
      <div className={classes.rightBox}>
        {isWord && <WordNew />}
        {isContent && <Content />}
        {isVideo && <Video />}
      </div>
    </div>
  );
};

export default Courses;
