import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import logo from "../../images/logo.png";
import SignOutIcon from "@atlaskit/icon/glyph/sign-out";
import PersonIcon from "@atlaskit/icon/glyph/person";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: "0px",
    right: "0px",
    left: "0px",
    borderBottom: "4px solid orange",
    color: "rgb(30, 31, 33)",
    backgroundColor: "#ffff",
    "& header > div": {
      minHeight: "48px !important",
    },
    "& header > div > div > h6": {
      fontSize: "15px",
      textUnderlineOffset: "12px",
      fontFamily:
        "-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif !important",
      fontWeight: "600",
    },
  },

  menuIcon: {
    display: "flex",
    position: "absolute",
    right: "5px",
  },

  menuButton: {
    background: "#3f51b5 !important",
    marginRight: theme.spacing(4),
    marginBottom: "3px",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  title: {
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  user: {
    marginLeft: "-8px",
    gap: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logOut: {
    gap: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  out: {
    marginRight: "3px",
    position: "relative",
    width: 0,
    height: 0,
    borderTop: "5px solid #D4DEE2",
    borderRight: "2px solid #D4DEE2",
    borderLeft: "2px solid #D4DEE2",
    borderBottom: "30px solid #D4DEE2",
  },
  icon: {
    primaryColor: "#303952",
  },
  select: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: "25px",
  },
}));

const MenuAppBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleProfile = (event) => {
    event.preventDefault();
    navigate("/checkOut", { replace: true });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    navigate("/search", { replace: true });
  };

  const handleCourses = (event) => {
    event.preventDefault();
    navigate("/courses", { replace: true });
  };

  const handleHome = (event) => {
    event.preventDefault();
    navigate("/home", { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <div onClick={handleHome} className={classes.menuButton}>
          <img className={classes.logo} alt="Dictionary" src={logo} />
        </div>
        <div className={classes.select}>
          <Typography variant="h6" className={classes.title}>
            <span onClick={handleHome}>{t("auth.appBar.Home")}</span>
          </Typography>
          <span className={classes.out}>
            <span className={classes.in} />
          </span>
          <Typography variant="h6" className={classes.title}>
            <span onClick={handleSearch}>{t("auth.appBar.Search")}</span>
          </Typography>
          <span className={classes.out}>
            <span className={classes.in} />
          </span>
          <Typography variant="h6" className={classes.title}>
            <span onClick={handleCourses}>{t("auth.appBar.Courses")}</span>
          </Typography>
        </div>
        {auth && (
          <div className={classes.menuIcon}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              style={{ top: "30px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "buttom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile} className={classes.user}>
                <PersonIcon size="medium" />
                {t("auth.login.profile")}
              </MenuItem>
              <MenuItem onClick={handleLogout} className={classes.logOut}>
                <SignOutIcon size="small" className={classes.icon} />
                <span style={{ fontSize: 16 }}> {t("auth.login.logout")} </span>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;
