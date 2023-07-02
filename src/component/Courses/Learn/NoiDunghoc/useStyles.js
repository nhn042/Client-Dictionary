import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  title: {
    marginTop: "30px",
    color: "blue"
  },
  noidungtieude: {
    display: "flex",
    gap: "10px",
    margin: "15px 0px 0px 15px",
    fontSize: "16px",
  },
  collapseHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > h4": {
      margin: 0,
    },
  },
  root: {
    margin: "30px 5px 50px 10px",
    padding: "1rem 2rem",
    border: "0.5px solid #C1C7D0",
    borderRadius: 8,
  },
  tieude: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  noidung: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0px 0px 25px",
    gap: "12px",
  },
  thidu: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px 10px 25px",
    gap: "10px",
  },
  group: {
    width: "auto",
    height: "auto",
  },
}));

export default useStyles;
