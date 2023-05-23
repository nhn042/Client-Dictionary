/* eslint-disable react-hooks/rules-of-hooks */
import { IconButton, InputAdornment } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";
import i18next from "i18next";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./home.css";

const useStyles = makeStyles(() => ({
  introduct: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexFlow: "row wrap",
    marginLeft: "auto",
    marginRight: "auto",
  },
  element: {
    maxWidth: "25%",
    position: "relative",
    margin: "0",
    padding: "0 15px 30px",
    width: "100%",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  '& > p': {
    textAlign: "center",
  }
  },
  h2: {
    color: "red",
    position: "relative",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  line: {
    display: "block",
    flex: "1",
    height: "2px",
    opacity: ".1",
    backgroundColor: "currentColor",
  },
  forgotPasswordForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "364px",
    height: "100%",
  },
}));
const homeScene = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            alt="ThirdSlide"
            src="https://wallpapercave.com/wp/wp3642699.jpg"
            style={{ height: "600px" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            alt="FirstSlide"
            src="https://wallpapercave.com/wp/wp3642734.jpg"
            style={{ height: "600px" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            alt="secondSlide"
            src="https://wallpapercave.com/wp/wp3642720.jpg"
            style={{ height: "600px" }}
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <div>
          <h2
            className={classes.h2}
            style={{ visibility: "visible", animationOnName: "fadeInDown" }}
          >
            <b className={classes.line}></b>
            <span style={{margin: "0 15px",}}>{t("auth.home.learn")}</span>
            <b className={classes.line}></b>
          </h2>
          <div className={classes.introduct}>
            <div className={classes.element}>
              <div className={classes.text}>
                <div>
                  <img src="https://thanhmaihsk.edu.vn/wp-content/uploads/2020/02/ICON-kinh-nghiem.png" />
                </div>
                <h3>{t("auth.home.title1")}</h3>
                <p>{t("auth.home.text1")}</p>
              </div>
            </div>
            <div className={classes.element}>
              <div className={classes.text}>
                <div>
                  <img src="	https://thanhmaihsk.edu.vn/wp-content/uploads/2020/02/Giang-vien-trinh-do-thanhmaihsk.png" />
                </div>
                <h3>{t("auth.home.title2")}</h3>
                <p>{t("auth.home.text2")}</p>
              </div>
            </div>
            <div className={classes.element}>
              <div className={classes.text}>
                <div>
                  <img src="https://thanhmaihsk.edu.vn/wp-content/uploads/2020/02/hoc-vien-da-dang-ki-hoc.png" />
                </div>
                <h3>{t("auth.home.title3")}</h3>
                <p>{t("auth.home.text3")}</p>
              </div>
            </div>
            <div className={classes.element}>
              <div className={classes.text}>
                <div>
                  <img src="https://thanhmaihsk.edu.vn/wp-content/uploads/2020/02/hoc-vien-thanh-cong-di-du-hoc.png" />
                </div>
                <h3>{t("auth.home.title1")}</h3>
                <p>{t("auth.home.text4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default homeScene;
