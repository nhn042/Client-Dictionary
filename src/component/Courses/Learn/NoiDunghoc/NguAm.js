import React from "react";
import Button from "@atlaskit/button/standard-button";
import nguyenamdon from "../../../../images/nguyenam.png";
import nguyenamngan from "../../../../images/nguyenamngan.png";
import nguyenamdoi from "../../../../images/nguyenamdoi.png";
import bannguyenam from "../../../../images/3bannguyenam.png";
import amdem from "../../../../images/amdem.png";
import phuam from "../../../../images/6phuam.png";
import amtiet from "../../../../images/amtiet.png";
import VidForwardIcon from '@atlaskit/icon/glyph/vid-forward'
import NewFeature16Icon from "@atlaskit/icon-object/glyph/new-feature/16";
import useStyles from "./useStyles"

import ModalDialog, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

import { useTranslation } from "react-i18next";

import Form from "@atlaskit/form";


export const NguAm = ({ closeModalNA }) => {

  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ModalTransition>
      <ModalDialog onClose={closeModalNA} width="x-large">
        <Form>
          {({ formProps }) => (
            <form id="nguam" {...formProps}>
              <ModalHeader>
                <ModalTitle>
                  <div>
                    {" "}
                    <h4 className={classes.title}>NGỮ ÂM</h4>
                  </div>
                  <div className={classes.noidungtieude}>
                  <VidForwardIcon primaryColor="red" size="small" label="" /> Bộ máy phát âm gồm có phổi, khoang họng, khoang miệng và khoang mũi. Bộ máy phát âm của người rất tinh vi, nên có thể phát ra vô số âm khác nhau. Mỗi thứ tiếng chỉ có một số đơn vị ngữ âm nhất định có tác dụng phân biệt yếu tố có nghĩa này với yếu tố có nghĩa khác. Ta gọi những đơn vị đó là một âm vị.
                  </div>
                </ModalTitle>
              </ModalHeader>

              <ModalBody>
                {/* <> */}
                <div className={classes.root}>
                  <div className={classes.collapseHeader}></div>
                  <div>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      ÂM TIẾT
                    </p>

                    <span>
                      Trong lời nói, một đơn vị phát âm tự nhiên của người ta
                      gọi là âm tiết. .Một âm tiết tiếng Tày-Nùng tối thiếu phải
                      có hai yếu tố tạo thành: một âm gốc và một thanh điệu.
                    </span>
                    <div className={classes.noidung}>
                      <img
                        className={classes.group}
                        alt="amtiet"
                        src={amtiet}
                      />
                    </div>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      ÂM GỐC
                    </p>
                    <span>
                      Âm gốc trong tiếng Tày bao giờ cũng là nguyên âm. Hệ thống
                      nguyên âm trong tiếng Tày-Nùng gồm có 11 nguyên âm đơn và
                      3 nguyên âm đôi.
                    </span>
                    <br></br>
                    <div className={classes.noidung}>
                      <li>Nguyên âm đơn</li>
                      <span>
                        - 11 nguyên âm đơn trong tiếng Tày là: 9 nguyên âm đơn
                        dài và 2 nguyên âm đơn ngắn:
                      </span>
                      <img
                        lassName={classes.group}
                        alt="nguyenamdon"
                        src={nguyenamdon}
                      />
                      <br></br>
                      <img
                        lassName={classes.group}
                        alt="nguyenamngan"
                        src={nguyenamngan}
                      />
                      <li>Nguyên âm đôi</li>
                      <span>
                        - Tổ hợp gồm có hai nguyên âm phát âm như nhau và có
                        chức năng như nhau trong cấu tạo âm tiết được gọi là
                        nguyên âm đôi, tiếng Tày-Nùng có ba nguyên âm đôi là:
                      </span>
                      <img
                        lassName={classes.group}
                        alt="nguyenamdoi"
                        src={nguyenamdoi}
                      />
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      ÂM CUỐI
                    </p>
                    <span>
                      Trong tiếng Tày-Nùng có 6 phụ âm và 3 bán nguyên âm làm
                      được âm cuối:
                    </span>
                    <div className={classes.noidung}>
                      <li>Phụ âm</li>
                      <img lassName={classes.group} alt="phuam" src={phuam} />
                      <li>Bán nguyên âm</li>
                      <img
                        lassName={classes.group}
                        alt="bannguyenam"
                        src={bannguyenam}
                      />
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      ÂM ĐỆM
                    </p>
                    <span>
                      Tiếng Tày-Nùng có hai bán nguyên âm u/ư và i/j làm được âm
                      đệm. Hai bán nguyên âm này có khả năng kết hợp rộng rãi
                      với các loại âm tiết
                      <div className={classes.noidung}>
                        <img lassName={classes.group} alt="amdem" src={amdem} />
                      </div>
                    </span>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      THANH ĐIỆU
                    </p>
                    <div>
                      Sự thay đổi về độ cao của âm có thể phân biệt được yếu tố
                      có nghĩa này và yếu tố có nghĩa khác gọi là thanh điệu.
                      Tiếng Tày-Nùng có 6 thanh:
                      <div className={classes.noidung}>
                        <li>Thanh bằng (không có dấu): ma, le, đông</li>
                        <li>Thanh sắc: má, bá</li>
                        <li>Thanh huyền: mà, cà, mò</li>
                        <li>Thanh hỏi: mả, nả, mỏ</li>
                        <li>Thanh nặng: mạ, cạ, chạn</li>
                        <li>Thanh lửng: ma*tha, ca*này</li>
                      </div>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      VẦN
                    </p>
                    <div>
                      Các bộ phận: âm gốc, âm đệm, âm cuối và thanh điệu kết hợp
                      với nhau theo một quy tắc nhất định tạo ra các vần. Tiếng
                      Tày-Nùng có 4 loại vần là:
                      <div className={classes.noidung}>
                        <li>
                          Vần mở: vần do nguyên âm đứng ở tận cùng (ia, ie,
                          io...)
                        </li>
                        <li>
                          Vần nửa mở: vần do bán nguyên âm đứng ở tận cùng (ai,
                          iu, ươi...)
                        </li>
                        <li>
                          Vần nửa khép: vần do âm mũi đứng ở tận cùng (am, an,
                          ang...)
                        </li>
                        <li>
                          Vần khép: vần do âm tắc đứng ở tận cùng (ap, at,
                          ac...)
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button onClick={closeModalNA} appearance="subtle">
                  {t("common.dong")}
                </Button>
              </ModalFooter>
            </form>
          )}
        </Form>
      </ModalDialog>
    </ModalTransition>
  );
};

export default NguAm;
