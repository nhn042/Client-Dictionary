import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Example from "./modal";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    "& > div": {
      display: "flex",

      flexDirection: "column",
      width: "320px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  group: {
    height: "250px",
    objectFit: "fill",
  },

  video: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: "18px",
    fontWeight: "700",
  },
}));

const ListVideo = ({ item: { id, cover, name, link } }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const handleVideo1 = (check) => {
    setIsOpenVideo1(true);
  };
  const [isOpenVideo1, setIsOpenVideo1] = useState(false);
  const closeModal = () => {
    setIsOpenVideo1(false);
  };
  return (
    <>
      <div className={classes.container}>
        <div onClick={handleVideo1}>
          <img className={classes.group} alt="Dictionary" src={cover} />
          <span className={classes.title}>{name}</span>
        </div>
        <div>
          {isOpenVideo1 && (
            <Example
              link={link}
              isOpentest={isOpenVideo1}
              closeModal={closeModal}
              style={{ marginTop: "50px" }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ListVideo;
