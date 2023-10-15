import React from "react";
import { useTranslation } from "react-i18next";
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group'
import QueuesIcon from "@atlaskit/icon/glyph/queues";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  box: {
    width: "200px",
    height: "250px",
    border: "black 1px solid",
    borderRadius: "10px",
    background: "#ffa500",
    "&:hover": {
      cursor: "pointer",
      color: "#0d87f0",
    },
  },
  boxInside: {
    display: "flex",
    minHeight: "100%",
    alignItems: "center",
    flexDirection: "row",
    gap: "20px",
    justifyContent: "space-around",
    borderRadius: "20px",
    background: "whitesmoke",
    height: "400px",
  },
  textLeft: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: "85px",
    gap: "15px",
    fontSize: "23px",
    fontWeight: "500",
  },
}));

const Introduce = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickBook = (event) => {
    event.preventDefault();
    navigate("/introduce/culture", { replace: true });
  };
  const handleClickWord = (event) => {
    event.preventDefault();
    navigate("/courses/dictionary", { replace: true });
  };
  const handleClickContent = (event) => {
    event.preventDefault();
    navigate("/courses/content", { replace: true });
  };
  const handleClickVideo = (event) => {
    event.preventDefault();
    navigate("/courses/video", { replace: true });
  };

  return (
    <div className={classes.container}>
      <div className={classes.boxInside}>
        <div
          onClick={handleClickBook}
          className={classes.box}
          style={{ marginLeft: "20px" }}
        >
          <span className={classes.textLeft}>
            <PeopleGroupIcon size="large" label="" /> {t("introduce.fulture")}
          </span>
        </div>
        {/* <div onClick={handleClickWord} className={classes.box}>
          <span className={classes.textLeft}>
            <SuitcaseIcon size="large" label="" /> {t("word.Dictionary")}
          </span>{" "}
        </div>{" "}
        <div onClick={handleClickContent} className={classes.box}>
          <span className={classes.textLeft}>
            <EditFilledIcon size="large" label="" /> {t("word.Content")}
          </span>{" "}
        </div>{" "}
        <div
          onClick={handleClickVideo}
          className={classes.box}
          style={{ marginRight: "20px" }}
        >
          <span className={classes.textLeft}>
            {" "}
            <ScreenIcon size="large" label="" />
            {t("word.video")}
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Introduce;
