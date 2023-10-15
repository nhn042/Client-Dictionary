import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import anh0 from "../../../../images/anh11.png";
import anh1 from "../../../../images/anh1.png";
import anh2 from "../../../../images/anh2.png";
import anh3 from "../../../../images/anh3.png";
import anh4 from "../../../../images/anh4.png";
import anh5 from "../../../../images/anh5.png";
import anh6 from "../../../../images/anh6.png";
import anh7 from "../../../../images/anh7.png";
import anh8 from "../../../../images/anh8.png";
import anh9 from "../../../../images/anh9.png";
import anh10 from "../../../../images/anh10.png";
import Textfield from "@atlaskit/textfield";
import EditorSearchIcon from "@atlaskit/icon/glyph/editor/search";
import Example from "./modal";

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
  group: {
    width: "285px",
    height: "250px",
    objectFit: "fill",
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
  const [isOpenVideo1, setIsOpenVideo1] = useState(false);
  const [wordSearch, setWordSearch] = useState("");
  const [nameVideo, setNameVideo] = useState([]);
  let Data = [
    "Học tiếng Tày - Nùng Online. Bài 4: Số đếm",
    "HỌC TIẾNG TÀY BÀI 3",
    "HỌC TIẾNG TÀY #1 - XƯNG HÔ TRONG GIA ĐÌNH VÀ ĐẾM SỐ",
    "HỌC TIẾNG TÀY BÀI 2",
    "HỌC TIẾNG TÀY BÀI 4 - Những Mẫu Câu Thông Dụng Mỗi Ngày",
    "Học tiếng Tày - Nùng| Chủ đề 3: Từ vựng xưng hô trong quan hệ gia đình",
    "Bài 1: Tiếng Tày - Nùng Không Khó Lắm | Tiểng Tày - Nùng Mí Slài Khỏ Học Tiếng Tày - Nùng",
    "Học tiếng Tày - Nùng Online. Bài 1: Chào hỏi",
    "Học tiếng Tày - Nùng online: Bài 2. Tên gì? Ở đâu?",
    "Học tiếng Tày - Nùng Online. Bài 3: Đại từ nhân xưng",
  ]
  const handleVideo1 = (check) => {
    console.log('check', check);
    setIsOpenVideo1(true);
  };
  const closeModal = () => {
    setIsOpenVideo1(false);
  };
  const handleSearch = (key, value) => {
    let newData = Data;
    newData = newData.filter((item) =>
      item?.toLowerCase().includes(value.toLowerCase())
    );
    console.log("newData", newData);
    setNameVideo(newData);
  };

  const number = ["1", "2"];
  const listVideo = [
    { id: 1, name: "Học tiếng Tày - Nùng Online. Bài 4: Số đếm", anh: anh0 },
    { id: 2, name: "HỌC TIẾNG TÀY BÀI 3", anh: anh1 },
  ];
  useEffect(() => {
    setNameVideo(Data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
  ])
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
                  handleSearch('keyword', e.target.value)
                }}
              />
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div className={classes.container}>
          {nameVideo[0] && (
            <div onClick={handleVideo1}>
              <img className={classes.group} alt="Dictionary" src={anh0} />
              <span>{nameVideo[0]}</span>
            </div>
          )}
          {nameVideo[1] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh1} />
              <span>{nameVideo[1]}</span>
            </div>
          )}
          {nameVideo[2] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh2} />
              <span>{nameVideo[2]}</span>
            </div>
          )}
          {nameVideo[3] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh3} />
              <span>{nameVideo[3]}</span>
            </div>
          )}
          {nameVideo[4] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh4} />
              <span>{nameVideo[4]}</span>
            </div>
          )}
          {nameVideo[5] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh6} />
              <span>{nameVideo[5]}</span>
            </div>
          )}
          {nameVideo[6] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh7} />
              <span>{nameVideo[6]}</span>
            </div>
          )}
          {nameVideo[7] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh8} />
              <span>{nameVideo[7]}</span>
            </div>
          )}
          {nameVideo[8] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh9} />
              <span>{nameVideo[8]}</span>
            </div>
          )}
          {nameVideo[9] && (
            <div>
              <img className={classes.group} alt="Dictionary" src={anh10} />
              <span>{nameVideo[9]}</span>
            </div>
          )}
        </div>
        {isOpenVideo1 && (
          <Example
            isOpentest={isOpenVideo1}
            closeModal={closeModal}
            style={{ marginTop: "50px" }}
          />
        )}
      </div>
    </>
  );
};

export default Video;
