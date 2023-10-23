/* eslint-disable no-undef */
import "./Search.css";
// import "../Definitions/Definitions.js";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Changes24Icon from "@atlaskit/icon-object/glyph/changes/24";
import { handleFindWord } from "../../services/userService";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@atlaskit/button/standard-button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "calc(100vh)",
    flexDirection: "column",
  },
  searchItem: {
    minWidth: 230,
    fontSize: "14px",
    border: "1px solid #a2b1b1",
    "& div": {
      overflow: "visible !important",
    },
    "@media screen and (max-width: 1024px)": {
      flex: 1,
    },
    '& input[name="keyword"]': {
      height: 36,
    },
  },
  changeSelect: {
    marginTop: "32px",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  select: {
    fontWeight: "700",
    fontSize: "20px",
    margin: "12px 4px",
    display: "flex",
    alignItems: "center",
  },
  errorMessageContainer: {
    color: "red",
    fontSize: "16px",
    width: "100%",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
  },
  topContent: {
    display: "flex",
    justifyContent: "flex-end",
    background:
      "linear-gradient(140.17deg, rgb(229 132 45 / 80%) 28.8%, rgba(250, 209, 0, 0.69) 75.48%)",
  },
}));

const SearchHome = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("viet");
  const [leftSelect, setLeftSelect] = useState("Viet");
  const [rightSelect, setRightSelect] = useState("Tay");
  const [meanings, setMeanings] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [response, setResponse] = useState(false);

  const navigate = useNavigate();

  const reset = () => {
    setMeanings([]);
    setWord("");
    setResponse(false);
  };
  const changeSearch = () => {
    if (leftSelect === "Viet") {
      setLeftSelect("Tay");
      setRightSelect("Viet");
      setCategory("tay");
    } else {
      setLeftSelect("Viet");
      setRightSelect("Tay");
      setCategory("viet");
    }
  };
  const handleSubmit = async (e) => {
    try {
      const res = await handleFindWord(category, word);
      console.log("res", res);
      setMeanings(res.data);
      setResponse(true);
    } catch (error) {
      setMeanings([]);
      setErrorMessage(t("search.messerror"));
      console.log(error);
    }
  };
  useEffect(() => {
    if (!word.trim()) return reset();
    const debouce = setTimeout(() => {}, 1000);
    return () => clearTimeout(debouce);
  }, [word, category]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage]);
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
      <div className="borderMain">
        <div className="panel">
          <div className="right-panel">
            <div className={classes.searchItem}>
              <span className={classes.select}>{leftSelect}</span>
            </div>
            <div className="search-box">
              <textarea
                placeholder="Tìm kiếm..."
                value={word}
                onChange={(e) => setWord(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={classes.changeSelect} onClick={changeSearch}>
            <Changes24Icon size="large" label="" />
          </div>
          <div className="left-panel">
            <div className={classes.searchItem}>
              <span className={classes.select}>{rightSelect}</span>
            </div>
            {category === "viet" &&
              (meanings?.listSequenceText ? (
                <div className="box-meaning">
                  {meanings?.listSequenceText?.map((meaning, index) => (
                    <div key={index}>
                      <p className="contain">- {meaning}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="box-meaning">
                  {meanings?.map((meaning, index) => (
                    <div key={index} className="contain">
                      <p>- {meaning}</p>
                    </div>
                  ))}
                </div>
              ))}
            {category === "tay" &&
              (meanings?.listSequenceText ? (
                <div className="box-meaning">
                  {meanings?.listSequenceText?.map((meaning, index) => (
                    <div key={index}>
                      <p className="contain">- {meaning}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="box-meaning">
                  {meanings?.map((meaning, index) => (
                    <div key={index} className="contain">
                      <p>- {meaning}</p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>

        <div className="button">
          <button className="search" onClick={handleSubmit}>
            {" "}
            {t("word.search")}{" "}
          </button>
        </div>
        {errorMessage && (
          <div className={classes.errorMessageContainer}>
            {/* <WarningIcon /> */}
            <span className={classes.errorMessage}>{errorMessage}</span>
          </div>
        )}
        {/* {!meanings.listSequenceText && response && (
        <Definitions word={word} meanings={meanings} />
      )} */}
      </div>
    </div>
  );
};

export default SearchHome;
