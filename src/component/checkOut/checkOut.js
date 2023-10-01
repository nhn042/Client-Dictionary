/* eslint-disable no-param-reassign */
// import CheckboxIcon from '@atlaskit/icon/glyph/checkbox'
// import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close'
// import WarningIcon from '@atlaskit/icon/glyph/warning'
// import Spinner from '@atlaskit/spinner'
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { DatePicker } from "@atlaskit/datetime-picker";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@atlaskit/select";
import PersonCircleIcon from "@atlaskit/icon/glyph/person-circle";
import EditIcon from "@atlaskit/icon/glyph/edit";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
// import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@root/utils'
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logoLogin.png";
import { handleUpdateInfor } from "../../services/userService";
// import screenDefaultApis from '../../services/screenDefaultApis'
// import { AuthContext } from './AuthProvider'

const useStyles = makeStyles(() => ({
  rightContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: "30px",
    marginLeft: "50px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "192px",
  },
  leftContent: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchItem: {
    width: "100%",
    "& > div > div": {
      borderRadius: "30px",
      marginTop: "10px",
    },
  },
  date: {
    width: "100%",
    "& > div > div > div": {
      borderRadius: "30px",
      marginTop: "10px",
    },
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
  profile: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderLeft: "2px solid #ffa50078",
  },
  profiledevide: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginLeft: "30px",
    marginTop: "50px",
    width: "25%",
  },
  updateInfor: {
    display: "flex",
    gap: "10px",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  formInput: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  buttonInfor: {
    borderRadius: "0px",
    "& > span": {
      width: "100%",
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "flex-start",
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
  wordNameField: {
    gap: 20,
    display: "flex",
    width: "100%",
  },
  errorMessageContainer: {
    color: "#D92929",
    fontSize: "16px",
    width: "100%",
    marginTop: "10px",
    display: "flex",
  },
  errorMessage: {
    marginLeft: "5px",
  },
}));

const Checkout = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  //   const {
  //     authenticate,
  //     completeNewPasswordChallenge,
  //     showSuccessfulChangePasswordNoti,
  //     setShowSuccessfulChangePasswordNoti,
  //   } = useContext(AuthContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isUpdateInfor, setIsUpdateInfor] = useState(true);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [sucessMessage, setSucessMessage] = useState(null);

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const navigate = useNavigate();

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickShowPassWord = (event) => {
    event.preventDefault();
    setIsShowPassword(!isShowPassword);
  };

  const handleClickShowConfirmPassWord = (event) => {
    event.preventDefault();
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  const UpdateInfor = () => {
    setIsUpdateInfor(true);
  };

  const UpdatePass = () => {
    setIsUpdateInfor(false);
  };

  const closeMessage = () => {
    // setShowSuccessfulChangePasswordNoti(false)
  };
  const onSubmitInfo = (event) => {};
  const onSubmitPass = (event) => {};
  const handleUpdateInfo = async (e) => {
    try {
      e.preventDefault();
      const res = await handleUpdateInfor(name, email, number, date, gender.label, address);
      console.log('res', res);
      setSucessMessage(t("checkOut.messcorect"));
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErrorMessage(t("checkOut.messerror"));
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage(false);
      setSucessMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage, sucessMessage]);

  return (
    <>
      <div className={classes.container}>
        {/* <div className={classes.profile}> */}
        <div className={classes.profiledevide}>
          <div>avatar</div>
          <div>
            <span>{t("checkOut.ten")}</span>
            <span>nguyen huu nghia</span>
          </div>
          <div>
            <span>{t("checkOut.gioitinh")}</span>
            <span>Nam</span>
          </div>
          <div>
            <span>{t("checkOut.birthday")}</span>
            <span>18/06/2001</span>
          </div>
          <div>
            <span>{t("checkOut.number")}</span>
            <span>0969909042</span>
          </div>
        </div>
        <div className={classes.profile}>
          <div className={classes.leftContent}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label={t("auth.Update.Infor")} onClick={UpdateInfor} />
              <Tab label={t("auth.Update.changePass")} onClick={UpdatePass} />
            </Tabs>
          </div>
          {isUpdateInfor ? (
            <form onSubmit={onSubmitInfo} className={classes.rightContent}>
              <span className={classes.loginTitle}>
                {t("auth.Update.updateInfor")}
              </span>
              <div className={classes.formInput}>
                <div className={classes.wordEmailField}>
                  <span className={classes.wordEmailTitle}>
                    {t("auth.Update.Name")}
                  </span>
                  <Input
                    onFocus={() => setErrorMessage(null)}
                    required
                    disabled={isLoading}
                    className={classes.input}
                    disableUnderline
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={t("auth.Update.workNamePlaceholder")}
                  />
                </div>

                <div className={classes.passwordOrMailField}>
                  <span className={classes.wordEmailTitle}>
                    {t("auth.Update.Email")}
                  </span>
                  <Input
                    onFocus={() => setErrorMessage(null)}
                    required
                    disabled={isLoading}
                    className={classes.input}
                    disableUnderline
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t("auth.Update.workEmailPlaceholder")}
                  />
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
                    <span className={classes.passwordTitle}>
                      {t("auth.Update.numberPhone")}
                    </span>
                    <Input
                      onFocus={() => setErrorMessage(null)}
                      required
                      disabled={isLoading}
                      type={"number"}
                      className={classes.input}
                      disableUnderline
                      value={number}
                      onChange={(event) => setNumber(event.target.value)}
                      placeholder={t("auth.Update.workPhonePlaceholder")}
                    />
                  </div>
                </div>
                <div className={classes.passwordOrMailField}>
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
                </div>
                <div className={classes.passwordOrMailField}>
                  <span className={classes.wordEmailTitle}>
                    {t("auth.signUp.gender")}
                  </span>
                  <div className={classes.searchItem}>
                    <Select
                      inputId="single-select-example"
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
                <button
                  type="submit"
                  className={classes.loginButton}
                  disabled={isLoading}
                  style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                  onClick={handleUpdateInfo}
                >
                  {/* {isLoading ? <Spinner /> : t(buttonTitle)} */}
                  {t("auth.Update.Update")}
                </button>
              </div>
              {errorMessage && (
                <div className={classes.errorMessageContainer}>
                  {/* <WarningIcon /> */}
                  <span className={classes.errorMessage}>{errorMessage}</span>
                </div>
              )}
              {sucessMessage && (
                <div className={classes.errorMessageContainer}>
                  {/* <WarningIcon /> */}
                  <span className={classes.errorMessage}>{sucessMessage}</span>
                </div>
              )}
            </form>
          ) : (
            <form onSubmit={onSubmitPass} className={classes.rightContent}>
              <span className={classes.loginTitle}>
                {t("auth.Update.updateInfor")}
              </span>
              <div className={classes.formInput}>
                <div className={classes.wordEmailField}>
                  <span className={classes.wordEmailTitle}>
                    {t("auth.Update.password")}
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
                    placeholder={t("auth.Update.workPassPlaceholder")}
                    endAdornment={
                      <InputAdornment
                        position="end"
                        className={classes.eyesIcon}
                      >
                        <IconButton
                          onClick={handleClickShowPassWord}
                          size="small"
                        >
                          {isShowPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>

                <div className={classes.passwordOrMailField}>
                  <span className={classes.wordEmailTitle}>
                    {t("auth.Update.newPassword")}
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
                    placeholder={t("auth.Update.workNewPasssPlaceholder")}
                    endAdornment={
                      <InputAdornment
                        position="end"
                        className={classes.eyesIcon}
                      >
                        <IconButton
                          onClick={handleClickShowConfirmPassWord}
                          size="small"
                        >
                          {isShowConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
                <button
                  type="submit"
                  className={classes.loginButton}
                  disabled={isLoading}
                  style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                >
                  {/* {isLoading ? <Spinner /> : t(buttonTitle)} */}
                  {t("auth.Update.Update")}
                </button>
              </div>
              {errorMessage && (
                <div className={classes.errorMessageContainer}>
                  {/* <WarningIcon /> */}
                  <span className={classes.errorMessage}>{errorMessage}</span>
                </div>
              )}
            </form>
          )}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Checkout;
