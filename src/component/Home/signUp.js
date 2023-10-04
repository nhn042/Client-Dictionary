/* eslint-disable no-param-reassign */
// import CheckboxIcon from '@atlaskit/icon/glyph/checkbox'
// import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close'
// import WarningIcon from '@atlaskit/icon/glyph/warning'
// import Spinner from '@atlaskit/spinner'
import IconButton from "@material-ui/core/IconButton";
import { DatePicker } from "@atlaskit/datetime-picker";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import Select from "@atlaskit/select";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@root/utils'
import { handleUserRegisterApi } from "../../services/userService";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
// import screenDefaultApis from '../../services/screenDefaultApis'
// import { AuthContext } from './AuthProvider'

const useStyles = makeStyles(() => ({
  loginForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    height: "100%",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "68px",
  },

  loginTitle: {
    fontWeight: "600",
    fontSize: "24px",
    color: "#091E42",
    marginTop: "17px",
  },

  wordEmailField: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15px",
    width: "100%",
    height: "69px",
  },

  wordNameField: {
    gap: 20,
    display: "flex",
    width: "100%",
  },

  messageCheckPass: {
    borderRadius: "0",
    position: "fixed",
    top: "0",
    width: "100%",
    background: "green",
    left: "0",
    color: "#fff",
    textAlign: "left",
    alignItems: "center",
    fontWeight: "normal",
    fontSize: "16px",
    display: "flex",
    padding: "5px 15px",
    justifyContent: "space-between",
  },

  wordEmailTitle: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#6D6E6F",
  },
  input: {
    "& > input": {
      marginTop: "13px",
      color: "#000",
      border: "1px solid #C1C7D0",
      height: "40px",
      fontSize: "14px",
      background: " #F5F5F5",
      boxSizing: "border-box",
      fontWeight: 500,
      borderRadius: "20px",
      padding: "0 10px 1px 18px",
      "&:focus": {
        border: "1px solid #FAD100",
        background: "#F5F5F5 !important",
      },
      "&:-webkit-autofill": {
        "&:focus": {
          WebkitBoxShadow: "0 0 0px 1000px #F5F5F5 inset !important",
        },
        WebkitBoxShadow: "0 0 0px 1000px #F5F5F5 inset !important",
      },
    },
    "& > select": {
      "&:-webkit-autofill": {
        "&:focus": {
          WebkitBoxShadow: "0 0 0px 1000px #F5F5F5 inset !important",
          boxShadow: "0 0 0 2px #fad10042 !important",
        },
        WebkitBoxShadow: "0 0 0px 1000px #F5F5F5 inset !important",
      },
    },
  },

  passwordOrMailField: {
    display: "flex",
    flexDirection: "column",
    marginTop: "28px",
    width: "100%",
  },
  passwordTitle: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#6D6E6F",
  },
  eyesIcon: {
    position: "absolute",
    right: "11px",
    top: "62%",
  },
  forgotPassword: {
    display: "flex",
    width: "100%",
    fontWeight: "500",
    fontSize: "14px",
    color: "#6D6E6F",
    marginTop: "10px",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
      textDecoration: "underline",
    },
  },
  messSignUp: {
    marginTop: "10px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  date: {
    width: "100%",
    "& > div > div > div": {
      borderRadius: "30px",
      marginTop: "10px",
    },
  },
  signUp: {
    marginLeft: "10px",
    fontWeight: "500",
    fontSize: "14px",
    color: "#fad100",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
      textDecoration: "underline",
    },
  },
  searchItem: {
    width: "100%",
    "& > div > div": {
      borderRadius: "30px",
      marginTop: "10px",
    },
  },
  loginButton: {
    cursor: "pointer",
    background: "linear-gradient(92.7deg, #EC6423 -20.42%, #FAD100 114.43%)",
    borderRadius: "20px",
    border: "none",
    fontWeight: 700,
    fontSize: "20px",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: "47px",
    alignItems: "center",
    marginTop: "48px",
    transition: "opacity 0.5s",
    "&:hover": {
      opacity: "0.85",
      color: "#FFFFFF",
    },
    color: "#F0FFF0",
  },
  messageContainer: {
    color: "#D92929",
    fontSize: "16px",
    width: "100%",
    marginTop: "50px",
    display: "flex",
  },
  message: {
    marginLeft: "5px",
  },
}));

const Register = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  //   const {
  //     authenticate,
  //     completeNewPasswordChallenge,
  //     showSuccessfulChangePasswordNoti,
  //     setShowSuccessfulChangePasswordNoti,
  //   } = useContext(AuthContext)
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [userAttr, setUserAttr] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [buttonTitle, setButtonTitle] = useState("auth.login.loginTitle");

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const navigate = useNavigate();

  const handleClickShowPassWord = (event) => {
    event.preventDefault();
    setIsShowPassword(!isShowPassword);
  };

  const handleClickShowConfirmPassWord = (event) => {
    event.preventDefault();
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    navigate("/forgotPassword", { replace: true });
  };

  const handleBackLogin = (event) => {
    event.preventDefault();
    navigate("/login", { replace: true });
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      console.log(name, email, password, date, gender, address);
      let userData = await handleUserRegisterApi(
        name,
        email,
        password,
        date,
        number,
        gender.label,
        address
      );
      setSuccessMessage(t("auth.signUp.messcorect"));
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErrorMessage(t("auth.signUp.messerror"));
    }
  };

  const closeMessage = () => {
    // setShowSuccessfulChangePasswordNoti(false)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(false)
      setErrorMessage(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [errorMessage, successMessage])

  return (
    <>
      <form className={classes.loginForm}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} alt="Daccel" src={logo} />
        </div>
        <span className={classes.loginTitle}>{t("auth.signUp.signUp")}</span>
        <>
          <div className={classes.wordNameField}>
            <div className={classes.wordEmailField}>
              <span className={classes.wordEmailTitle}>
                {t("auth.signUp.emailTitle")}
              </span>
              <Input
                onFocus={() => setErrorMessage(null)}
                required
                disabled={isLoading}
                className={classes.input}
                disableUnderline
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t("auth.signUp.workEmailPlaceholder")}
              />
            </div>
            <div className={classes.wordEmailField}>
              <span className={classes.wordEmailTitle}>
                {t("auth.signUp.name")}
              </span>
              <Input
                onFocus={() => setErrorMessage(null)}
                required
                disabled={isLoading}
                className={classes.input}
                disableUnderline
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t("auth.signUp.workNamePlaceholder")}
              />
            </div>
          </div>
          <div className={classes.wordNameField}>
            <div className={classes.wordEmailField}>
              <span className={classes.wordEmailTitle}>
                {t("auth.signUp.address")}
              </span>
              <Input
                onFocus={() => setErrorMessage(null)}
                required
                disabled={isLoading}
                className={classes.input}
                disableUnderline
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder={t("auth.signUp.addressPlaceholder")}
              />
            </div>
            <div className={classes.wordEmailField}>
              <span className={classes.wordEmailTitle}>
                {t("auth.signUp.number")}
              </span>
              <Input
                onFocus={() => setErrorMessage(null)}
                required
                disabled={isLoading}
                className={classes.input}
                disableUnderline
                type={number}
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                placeholder={t("auth.signUp.workSDTPlaceholder")}
              />
            </div>
          </div>
          <div className={classes.wordNameField}></div>

          <div className={classes.passwordOrMailField}>
            <span className={classes.passwordTitle}>
              {t("auth.login.passwordTitle")}
            </span>
            <Input
              onFocus={() => setErrorMessage(null)}
              required
              disabled={isLoading}
              type={isShowPassword ? "text" : "password"}
              className={classes.input}
              disableUnderline
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={t("auth.login.passwordPlaceholder")}
              endAdornment={
                <InputAdornment position="end" className={classes.eyesIcon}>
                  <IconButton onClick={handleClickShowPassWord} size="small">
                    {isShowPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className={classes.passwordOrMailField}>
            <span className={classes.passwordTitle}>
              {t("auth.signUp.confirmPasswordTitle")}
            </span>
            <Input
              onFocus={() => setErrorMessage(null)}
              required
              disabled={isLoading}
              type={isShowConfirmPassword ? "text" : "password"}
              className={classes.input}
              disableUnderline
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder={t("auth.signUp.newPasswordPlaceholder")}
              endAdornment={
                <InputAdornment position="end" className={classes.eyesIcon}>
                  <IconButton
                    onClick={handleClickShowConfirmPassWord}
                    size="small"
                  >
                    {isShowConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div
            className={classes.passwordOrMailField}
            style={{ marginTop: "15px" }}
          >
            <span className={classes.wordEmailTitle}>
              {t("auth.signUp.date")}
            </span>
            <div className={classes.date}>
              <DatePicker
                value={date}
                onChange={(date) => setDate(date)}
                selectProps={{
                  inputId: "default-date-picker-example",
                }}
              />
            </div>
            <div className={classes.wordEmailField}>
              <span className={classes.wordEmailTitle}>
                {t("auth.signUp.gender")}
              </span>
              <div className={classes.searchItem}>
                <Select
                  inputId="single-select-example"
                  // className="single-select"
                  value={gender}
                  classNamePrefix="react-select"
                  options={[
                    { label: "Nam", value: "nam" },
                    { label: "Nữ", value: "nu" },
                  ]}
                  onChange={(newValue) => {
                    setGender(newValue);
                  }}
                />
              </div>
            </div>
          </div>
        </>
        {errorMessage && (
          <div className={classes.messageContainer}>
            {/* <WarningIcon /> */}
            <span className={classes.message}>{errorMessage}</span>
          </div>
        )}
        {successMessage && (
          <div className={classes.messageContainer}>
            {/* <WarningIcon /> */}
            <span className={classes.message}>{successMessage}</span>
          </div>
        )}
        <button
          onClick={handleSignUp}
          className={classes.loginButton}
          disabled={isLoading}
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
        >
          {/* {isLoading ? <Spinner /> : t(buttonTitle)} */}
          {t("auth.signUp.signUp")}
        </button>
        <div onClick={handleBackLogin} className={classes.messSignUp}>
          <span
            style={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#6D6E6F",
            }}
          >
            {t("auth.login.Register")}
          </span>
          <span className={classes.signUp}>{t("auth.login.login")} </span>
        </div>
        {/* {showSuccessfulChangePasswordNoti && (
          <div className={classes.messageCheckPass}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CheckboxIcon
                size="large"
                primaryColor="#FFFFFF"
                secondaryColor="#008000"
              />
              <span style={{ marginLeft: '5px' }}>
                {t('auth.forgotPassword.changePassSuccess')}
              </span>
            </div>
            <div>
              <button
                type="button"
                onClick={closeMessage}
                style={{
                  background: 'green',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <EditorCloseIcon primaryColor="#FFFFFF" />
              </button>
            </div>
          </div>
        )} */}
      </form>
    </>
  );
};

export default Register;
