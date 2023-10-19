import React, {
    Fragment,
    useContext,
    useEffect,
    useState,
    useMemo,
  } from "react";
  import { useTranslation } from "react-i18next";
  import { makeStyles } from "@material-ui/core/styles";
  
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "20px",
    },
  }));
  
  const WordNew1 = () => {
    const classes = useStyles();
    const [checkIsLoading, setIsLoading] = useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [tableRows, setTableRows] = useState([]);
    const [dataWord, setDataWord] = useState([]);
    const [dataMain, setDataMain] = useState([]);
    const [wordViet, setWordViet] = useState();
    const [wordTay, setWordTay] = useState();
    const [description, setDescription] = useState();
    const [wordType, setwordType] = useState();
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sucessMessage, setSucessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const { t } = useTranslation();
    const handleExpand = () => {
      setExpanded(!expanded);
    };

  
    const head = {
      cells: [
        {
          key: "Tiếng Việt",
          content: <div className={classes.tableHeader}>{t("word.viet")}</div>,
        },
        {
          key: "Tiếng Tày",
          content: <div className={classes.tableHeader}>{t("word.tay")}</div>,
        },
        {
          key: "Loại Từ",
          "data-align": "center",
          content: <div className={classes.tableHeader}>{t("word.dokho")}</div>,
        },
        {
          key: "Miêu Tả",
          "data-align": "center",
          content: (
            <div className={classes.tableHeader} style={{ borderRight: "none" }}>
              {t("word.description")}
            </div>
          ),
        },
      ],
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setErrorMessage(false);
        setSucessMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, [errorMessage, sucessMessage]);
  
    return (
      <div className={classes.container}>
        aaaa
      </div>
    );
  };
  
  export default WordNew1;
  