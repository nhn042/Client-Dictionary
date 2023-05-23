/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({}));

const buyCourses = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
  <div>
    <center>
        <font>
            <strong>
                Đăng ký mua khóa học
            </strong>
        </font>
    </center>
    <h3>
        <img src="https://cunghoc.vn/images/icons/bd11.gif"/>
        Đơn đặt hàng mua khóa học
    </h3>
  </div>
  );
};

export default buyCourses;
