/* eslint-disable no-undef */
import "./Search.css";
import "../Definitions/Definitions.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Definitions from "../Definitions/Definitions.js";
import categories from "../../data/category";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Changes24Icon from "@atlaskit/icon-object/glyph/changes/24";

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
  const [category, setCategory] = useState("Viet");
  const [leftSelect, setLeftSelect] = useState("Viet");
  const [rightSelect, setRightSelect] = useState("Tay");
  const [meanings, setMeanings] = useState([]);
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
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      axios
        .get(`http://localhost:8080/dictionary/${category}?query=${word}`, word)
        .then((res) => {
          console.log(res.data);
          setMeanings(res.data);
          setResponse(true);
        });
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    if (!word.trim()) return reset();
    const debouce = setTimeout(() => {}, 1000);
    return () => clearTimeout(debouce);
  }, [word, category]);

  return (
    <div className="borderMain">
      <div className="panel">
        <div className="right-panel">
          <div>
            <select
              value={leftSelect}
              onChange={(e) => setLeftSelect(e.target.value)}
            >
              {categories.map((option, index) => (
                <option key={index}>{option.value}</option>
              ))}
            </select>
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
            <select
              value={rightSelect}
              onChange={(e) => setRightSelect(e.target.value)}
            >
              {categories.map((option, index) => (
                <option key={index}>{option.value}</option>
              ))}
            </select>
          </div>
          {category === "Viet" &&
            (meanings.listSequenceText ? (
              <div className="box-meaning">
                {meanings.listSequenceText?.map((meaning, index) => (
                  <div key={index}>
                    <p className="contain">- {meaning}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="box-meaning">
                {meanings.map((meaning, index) => (
                  <div key={index} className="contain">
                    <p>- {meaning.idTay.word}</p>
                  </div>
                ))}
              </div>
            ))}
          {category === "Tay" &&
            (meanings.listSequenceText ? (
              <div className="box-meaning">
                {meanings.listSequenceText?.map((meaning, index) => (
                  <div key={index}>
                    <p className="contain">- {meaning}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="box-meaning">
                {meanings.map((meaning, index) => (
                  <div key={index} className="contain">
                    <p>- {meaning.idVi.word}</p>
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

      {!meanings.listSequenceText && response && (
        <Definitions word={word} meanings={meanings} />
      )}
    </div>
  );
};

export default Search;
