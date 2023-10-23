/* eslint-disable no-unused-vars */
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import i18next from "i18next";
import Button from "@atlaskit/button/standard-button";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    height: "calc(100vh)",
    flexDirection: "column",
  },
  circle: {
    width: "235%",
    minHeight: "100%",
    aspectRatio: "1/1",
    borderRadius: "50%",
    position: "absolute",
    left: "-140%",
    background:
      "linear-gradient(140.17deg, rgba(236, 100, 35, 0.8) 28.8%, rgba(250, 209, 0, 0.69) 75.48%)",
  },

  leftPart: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },

  textLeft: {
    display: "flex",
    flexDirection: "column",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "35px",
    lineHeight: "48px",
    color: "#FAFBFC",
    zIndex: 1,
    marginBottom: 70,
  },
  dot: {
    position: "relative",
    bottom: "-20px",
    letterSpacing: "10px",
  },
  rightPart: {
    height: "100%",
    width: "50%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    display: "flex",
    height: "100%",
  },
  topContent: {
    display: "flex",
    justifyContent: "flex-end",
    background:
      "linear-gradient(140.17deg, rgb(229 132 45 / 80%) 28.8%, rgba(250, 209, 0, 0.69) 75.48%)",
  },
  button: {
    display: "flex",
  },
}));

const WrapperComponent = ({ children }) => {
  const currentLanguage = i18next.language;

  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation();
  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/login", { replace: true });
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    navigate("/signUp", { replace: true });
  };
  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/home/search", { replace: true });
  };
  return (
    <div className={classes.container}>
      <div className={classes.topContent}>
        <div>
          <Button onClick={handleLogin} appearance="subtle">
            {t("auth.appBar.Login")}
          </Button>
        </div>
        <div>
          <Button onClick={handleSignUp} appearance="subtle">
            {t("auth.appBar.signUp")}
          </Button>
        </div>
        <div>
          <Button onClick={handleSearch} appearance="subtle">
            {t("auth.appBar.Search")}
          </Button>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.leftPart}>
          <div className={classes.circle} />
          <div className={classes.textLeft}>
            <span className={classes.dot}>{t("auth.title")}</span>
          </div>
        </div>
        <div className={classes.rightPart}>{children}</div>
      </div>
    </div>
  );
};

export default WrapperComponent;
