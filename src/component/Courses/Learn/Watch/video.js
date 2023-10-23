import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import { Comcentense, Communicate } from "./data";
import Textfield from "@atlaskit/textfield";
import EditorSearchIcon from "@atlaskit/icon/glyph/editor/search";
import Example from "./modal";
import ListVideo from "./listVideo";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "50px",
    margin: "10px 30px 0px",
    justifyContent: "flex-start",
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
  title: {
    margin: "20px 30px",
    fontSize: "22px",
    fontWeight: "700",
  },
  buttonSearch: {
    width: "50px",
    height: "48px",
    marginTop: "20px",
    borderRadius: "0 40px 40px 0",
    border: "1px solid",
    borderLeft: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  input: {
    width: "100%",
    height: "2em !important",
    marginTop: "8px",
    border: "none",
  },
  border: {
    marginLeft: "4px",
    marginTop: "5px",
  },
  search: {
    height: "48px",
    marginTop: "20px",
    border: "1px solid",
    borderRadius: "40px 0 0 40px",
    "& > div": {
      width: "500px",
      marginLeft: "7px",
      marginBottom: "7px",
      border: "none",
    },
  },
  boxVideo: {
    marginTop: "50px",
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
}));
const Video = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [commuticate, setCommuticate] = useState(Communicate);
  const [comcentense, setComcentense] = useState(Comcentense);
  const [wordSearch, setWordSearch] = useState("");
  console.log("Communicate", Communicate);
  const handleSearch = (key, value) => {
    let dataCommuticate = Communicate;
    let dataComcentense = Comcentense;
    dataCommuticate = dataCommuticate.filter((item) =>
      item?.name.toLowerCase().includes(value.toLowerCase())
    );
    dataComcentense = dataComcentense.filter((item) =>
      item?.name.toLowerCase().includes(value.toLowerCase())
    );
    setCommuticate(dataCommuticate);
    setComcentense(dataComcentense);
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={classes.search}>
              <Textfield
                elemBeforeInput={
                  <EditorSearchIcon
                    label="search icon"
                    primaryColor="rgb(94, 108, 132)"
                  />
                }
                value={wordSearch}
                onChange={(e) => setWordSearch(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter")
                    handleSearch("keyword", e.target.value);
                }}
                className={classes.input}
                onFocus={(e) => {
                  handleSearch("keyword", e.target.value);
                }}
              />
            </div>
          </div>
          <div></div>
        </div>
        {commuticate.length > 0 && (<div className={classes.title}>Đại từ xưng hô - Số đếm</div>)}
        <div className={classes.container}>
          {commuticate.map((item) => {
            return (
              <>
                <ListVideo key={item.id} item={item} />
              </>
            );
          })}
        </div>
        {comcentense.length > 0 && (<div className={classes.title}>Mẫu câu giao tiếp</div>)}
        <div className={classes.container}>
          {comcentense.map((item) => {
            return (
              <>
                <ListVideo key={item.id} item={item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Video;
