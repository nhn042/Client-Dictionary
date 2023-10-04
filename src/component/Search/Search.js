/* eslint-disable no-undef */
import "./Search.css";
import "../Definitions/Definitions.js";
import React, { useEffect, useState } from "react";
import Select, { components } from "@atlaskit/select";
import categories from "../../data/category";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Changes24Icon from "@atlaskit/icon-object/glyph/changes/24";
import { handleFindWord } from "../../services/userService";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "row",
  },
}));

const Search = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("viet");
  const [leftSelect, setLeftSelect] = useState("Viet");
  const [rightSelect, setRightSelect] = useState("Tay");
  const [meanings, setMeanings] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [response, setResponse] = useState(false);
  const [error, setError] = useState("");
  const reset = () => {
    setMeanings([]);
    setWord("");
    setResponse(false);
  };
  const changeSearch = () => {
    leftSelect === "Viet" ? setLeftSelect("Tay") : setLeftSelect("Viet");
    rightSelect === "Viet" ? setRightSelect("Tay") : setRightSelect("Viet");
  };
  const [accessLevel, setAccessLevelFilter] = React.useState({
    label: "Viet",
    value: "",
  });
  const ACCESS_LEVEL_OPTIONS = () => [
    {
      label: "Viet",
      value: "",
    },
    {
      label: "Tay",
      value: true,
    },
  ];
  const handleSubmit = async (e) => {
    try {
      const res = await handleFindWord(category, word);
      console.log("res", res);
      setMeanings(res.data);
      setResponse(true);
    } catch (error) {
      setMeanings([]);
      setErrorMessage(t("checkOut.messerror"));
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

  return (
    <div className="borderMain">
      <div className="panel">
        <div className="right-panel">
          <div>
            <Select
              blurInputOnSelect
              value={accessLevel}
              onChange={(opt) => {
                setAccessLevelFilter(opt);
                setCategory(opt.label.toLowerCase());
              }}
              options={ACCESS_LEVEL_OPTIONS()}
            />
          </div>
          <div className="search-box">
            <textarea
              placeholder="Tìm kiếm..."
              value={word}
              onChange={(e) => setWord(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div style={{ marginTop: "22px" }} onClick={changeSearch}>
          <Changes24Icon size="large" label="" />
        </div>
        <div className="left-panel">
          <div>
            {/* <select
              value={rightSelect}
              onChange={(e) => setRightSelect(e.target.value)}
            >
              {categories.map((option, index) => (
                <option key={index}>{option.value}</option>
              ))}
            </select> */}
            <Select
              blurInputOnSelect
              value={accessLevel}
              onChange={(opt) => {
                setAccessLevelFilter(opt);
                setCategory(opt.label.toLowerCase());
              }}
              options={ACCESS_LEVEL_OPTIONS()}
            />
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
  );
};

export default Search;
