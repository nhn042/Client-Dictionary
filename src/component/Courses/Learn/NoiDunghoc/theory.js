import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import NguAm from "./NguAm";
import Tu from "./Tu";
import Cau from "./Cau";
import LT from "./LT";
import MRPC from "./MRPC";
import MRC from "./MRC";
import RGC from "./RGC";
import DNC from "./DNC";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "30px auto auto 30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "50px",
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "350px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  button: {
    border: "2px solid #ffa50078",
    background: "#978a58a3",
    borderRadius: "8px",
    height: "150px",
    width: "285px",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: "25px",
    fontWeight: "500",
  },
  
}));
const Theory = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isOpenNP, setIsOpenNP] = useState(true);

  const [isOpenNA, setIsOpenNA] = useState(false);
  const [isOpenTu, setIsOpenTu] = useState(false);
  const [isOpenCau, setIsOpenCau] = useState(false);
  const [isOpenLT, setIsOpenLT] = useState(false);
  const [isOpenMRPC, setIsOpenMRPC] = useState(false);
  const [isOpenMRC, setIsOpenMRC] = useState(false);
  const [isOpenRGC, setIsOpenRGC] = useState(false);
  const [isOpenDNC, setIsOpenDNC] = useState(false);

  const closeModalNA = () => setIsOpenNA(false);
  const closeModalTu = () => setIsOpenTu(false);
  const closeModalCau = () => setIsOpenCau(false);
  const closeModalLT = () => setIsOpenLT(false);
  const closeModalMRPC = () => setIsOpenMRPC(false);
  const closeModalMRC = () => setIsOpenMRC(false);
  const closeModalRGC = () => setIsOpenRGC(false);
  const closeModalDNC = () => setIsOpenDNC(false);

  const handleOpenNA = () => {
    setIsOpenNA(true);
  };
  const handleOpenTu = () => {
    setIsOpenTu(true);
  };
  const handleOpenCau = () => {
    setIsOpenCau(true);
  };
  const handleOpenLoaiTu = () => {
    setIsOpenLT(true);
  };
  const handleOpenMRPC = () => {
    setIsOpenMRPC(true);
  };
  const handleOpenMRC = () => {
    setIsOpenMRC(true);
  };
  const handleOpenRGC = () => {
    setIsOpenRGC(true);
  };
  const handleOpenDNC = () => {
    setIsOpenDNC(true);
  };
  return (
    <>
      {isOpenNP && (
        <div className={classes.container}>
          <div onClick={handleOpenNA} className={classes.button}>
            <span className={classes.text}>{t("word.nguam")}</span>
          </div>
          <div onClick={handleOpenTu} className={classes.button}>
            <span className={classes.text}>{t("word.Tu")}</span>
          </div>
          <div onClick={handleOpenCau} className={classes.button}>
            <span className={classes.text}>{t("word.cau")}</span>
          </div>
          <div onClick={handleOpenLoaiTu} className={classes.button}>
            <span className={classes.text}>{t("word.loaitu")}</span>
          </div>
          <div onClick={handleOpenMRPC} className={classes.button}>
            <span className={classes.text}>{t("word.morongphancau")}</span>
          </div>
          <div onClick={handleOpenMRC} className={classes.button}>
            <span className={classes.text}>{t("word.morongcau2")}</span>
          </div>
          <div onClick={handleOpenRGC} className={classes.button}>
            <span className={classes.text}>{t("word.rutgoncau")}</span>
          </div>
          <div onClick={handleOpenDNC} className={classes.button}>
            <span className={classes.text}>{t("word.daungatcau")}</span>
          </div>
        </div>
      )}
      {isOpenNA && <NguAm closeModalNA={closeModalNA} />}
      {isOpenTu && <Tu closeModalTu={closeModalTu} />}
      {isOpenCau && <Cau closeModalCau={closeModalCau} />}
      {isOpenLT && <LT closeModalLT={closeModalLT} />}
      {isOpenMRPC && <MRPC closeModalMRPC={closeModalMRPC} />}
      {isOpenMRC && <MRC closeModalMRC={closeModalMRC} />}
      {isOpenRGC && <RGC closeModalRGC={closeModalRGC} />}
      {isOpenDNC && <DNC closeModalDNC={closeModalDNC} />}
    </>
  );
};

export default Theory;
