import React from "react";
import Button from "@atlaskit/button/standard-button";
import VidForwardIcon from '@atlaskit/icon/glyph/vid-forward'
import Task16Icon from "@atlaskit/icon-object/glyph/task/16";
import NewFeature16Icon from "@atlaskit/icon-object/glyph/new-feature/16";
import useStyles from "./useStyles";

import ModalDialog, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

import { useTranslation } from "react-i18next";

import Form from "@atlaskit/form";

export const MRPC = ({ closeModalMRPC }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ModalTransition>
      <ModalDialog onClose={closeModalMRPC} width="x-large">
        <Form>
          {({ formProps }) => (
            <form id="morongphancau" {...formProps}>
              <ModalHeader>
                <ModalTitle>
                  <div>
                    {" "}
                    <h4 className={classes.title}>MỞ RỘNG CÁC PHẦN CỦA CÂU</h4>
                  </div>
                  <div className={classes.noidungtieude}>
                  <VidForwardIcon primaryColor="red" size="small" label="" /> Trong câu, nếu ta chỉ cần nói đến những sự vật, những hành động hay tính chất chung chung thì mỗi phần của câu không phức tạp và thường chỉ có một từ. Song, để lời nói được cụ thể hơn, có nhiều sắc thái tình cảm hơn thì người ta thường thêm vào mỗi phần một ít từ nữa. Đó là hiện tượng mở rộng các phần của câu.
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
                      CỤM DANH TỪ
                    </p>
                    <span>
                      Cụm từ lấy danh từ làm trung tâm là cụm danh từ.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Rườn kích
                      (nhà gạch)
                    </div>

                    <div className={classes.noidung}>
                      <li>
                        Phần phụ đứng trước danh từ trung tâm: phần phụ là những
                        từ chỉ số lượng xác định số lượng toàn thể, số lượng
                        không xác định, số lượng chính xác
                      </li>
                      <li>
                        Phần phụ đứng sau danh từ trung tâm: phần phụ là danh
                        từ, tính từ, số từ thứ tự, đại từ, cụm từ chủ vị
                      </li>
                    </div>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      CỤM ĐỘNG TỪ
                    </p>
                    <span>
                      Cụm từ lấy động từ làm trung tâm là cụm động từ. Động từ
                      có thể được các loại từ sau đây phụ thuộc nghĩa cho nó:
                      danh từ, tính từ...
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Kin nặm (uống
                      nước)
                    </div>  
                    <div className={classes.noidung}>
                      <li>
                        Phần phụ đứng trước động từ trung tâm: phần phụ là những
                        từ chỉ số lượng xác định thời gian của hành động, chỉ sự
                        bị động, phủ định hoạt động do từ trung tâm biểu thị.
                      </li>
                      <li>
                        Phần phụ đứng sau động từ trung tâm: phần phụ là danh
                        từ, tính từ, số từ.
                      </li>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      CỤM TÍNH TỪ
                    </p>
                    <span>
                      Cụm từ lấy tính từ làm trung tâm là cụm tính từ.
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Phần phụ đứng trước danh từ trung tâm: phần phụ là những
                        phụ từ thời gian, phủ định, mức độ.
                      </li>
                      <li>
                        Phần phụ đứng sau danh từ trung tâm: phần phụ là danh
                        từ, đại từ xưng hô, động từ, số từ thứ tự, tính từ.
                      </li>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button onClick={closeModalMRPC} appearance="subtle">
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

export default MRPC;
