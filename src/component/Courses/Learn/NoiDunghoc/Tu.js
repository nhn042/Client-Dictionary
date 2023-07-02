import React from "react";
import Button from "@atlaskit/button/standard-button";
import VidForwardIcon from '@atlaskit/icon/glyph/vid-forward'
import Task16Icon from "@atlaskit/icon-object/glyph/task/16";
import NewFeature16Icon from "@atlaskit/icon-object/glyph/new-feature/16";
import useStyles from './useStyles'

import ModalDialog, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

import { useTranslation } from "react-i18next";

import Form from "@atlaskit/form";

export const Tu = ({ closeModalTu }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ModalTransition>
      <ModalDialog onClose={closeModalTu} width="x-large">
        <Form>
          {({ formProps }) => (
            <form id="Tu" {...formProps}>
              <ModalHeader>
                <ModalTitle>
                  <div>
                    {" "}
                    <h4 className={classes.title}>TỪ</h4>
                  </div>
                  <div className={classes.noidungtieude}>
                  <VidForwardIcon primaryColor="red" size="small" label="" /> Một từ bao giờ cũng có hai mặt: hình thức - tức là vỏ âm thanh và nội dung - tức là ý nghĩa. Nội dung của từ là sự phản ánh thực tế khách quan vào ý thức con người.
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
                      TỪ MỘT NGHĨA
                    </p>
                    <span>Từ một nghĩa là từ chỉ có một nghĩa duy nhất.</span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: ca rộc (con
                      cóc)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      TỪ NHIỀU NGHĨA
                    </p>
                    <span>
                      Từ nhiều nghĩa là từ bao hàm có hai nghĩa trở lên gọi là
                      từ nhiều nghĩa.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: pac: (mồm,
                      mỏ)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      TỪ CÙNG NGHĨA
                    </p>
                    <span>
                      Từ cùng nghĩa là những từ có hình thức ngữ âm khác nhau,
                      nhưng ý nghĩa giống nhau gọi là từ cùng nghĩa.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: dỏm, lè, ngòi
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      TỪ CÙNG ÂM
                    </p>
                    <span>
                      Từ cùng âm là hững từ có một hình thức ngữ âm như nhau
                      nhưng có ý nghĩa khác hẳn nhau.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: xả, xá
                    </div>

                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      TỪ TRÁI NGHĨA
                    </p>
                    <span>
                      Từ trái nghĩa là những từ có nghĩa trái ngược nhau
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: đây (tốt) -
                      lóa (xấu)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      TỪ VỰNG
                    </p>
                    <span>
                      Từ vựng cơ bản và từ vựng không cơ bản. Những từ đóng vai
                      trò hạt nhân trong kho từ vựng có đặc điểm sức sống lâu
                      dài, có khả năng sinh ra từ mới gọi là từ vựng cơ bản.
                      Phần từ vựng không mang đầy đủ các đặc điểm kể trên là từ
                      vựng không cơ bản.
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Từ gốc Tày-Nùng: Cơ bản hầu hết đều là gốc Tày-Nùng Thí
                        dụ: Những từ chỉ tự nhiên, thời gian, không gian, thực
                        vật, động vật, hoạt động, trạng thái
                      </li>
                      <li>
                        Từ mượn: Là những từ mượn của tiếng Hán và tiếng Việt
                        (fụ mẫu: bố mẹ)
                      </li>
                      <li>
                        Từ thuần: Những từ chỉ cấu tạo bằng một đơn vị nhỏ nhất
                        có ý nghĩa từ vựng là từ thuần (bân: trời, lồm: gió)
                      </li>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      CẤU TẠO CỦA TỪ
                    </p>
                    <span>
                    Xét theo sự có mặt của các yếu tố có nghĩa trong từ, có thể chia từ trong Tày-Nùng ra làm hai loại là từ thuần và từ ghép.
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Từ thuần: Những từ chỉ cấu tạo bằng một đơn vị nhỏ nhất
                        có ý nghĩa từ vựng là từ thuần (bân: trời, lồm: gió)
                      </li>
                      <li>
                        Từ ghép: Một từ do hai hay trên hai đơn vị có ý nghĩa từ
                        vựng hợp thành gọi là từ ghép (Nả na: không biết thẹn)
                      </li>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button onClick={closeModalTu} appearance="subtle">
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

export default Tu;
