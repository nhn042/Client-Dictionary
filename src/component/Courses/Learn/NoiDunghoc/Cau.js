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

export const Cau = ({ closeModalCau }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ModalTransition>
      <ModalDialog onClose={closeModalCau} width="x-large">
        <Form>
          {({ formProps }) => (
            <form id="cau" {...formProps}>
              <ModalHeader>
                <ModalTitle>
                  <div>
                    {" "}
                    <h4 className={classes.title}>CÂU</h4>
                  </div>
                  <div className={classes.noidungtieude}>
                  <VidForwardIcon primaryColor="red" size="small" label="" /> Khi chúng ta nói hay viết, không phải câu nào cũng giống câu nào. Ta chia thành hai loại sau, loại câu do hai phần tạo thành gọi là câu bình thường. Còn câu chỉ có một phần gọi là câu đặc biệt.
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
                      CÂU BÌNH THƯỜNG
                    </p>

                    <span>
                      Câu bình thường là loại câu do một cụm từ chủ vị tạo thành
                      (Noọng slon slư: em học)
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Chủ ngữ: Là phần biểu thị sự vật mà hoạt động, trạng
                        thái hay đặc điểm, bản chất được tường thuật ở bộ phận
                        vị ngữ.
                      </li>
                      <li>
                        Vị ngữ: Là những phần quan trọng nhất trong câu bình
                        thường. Nó tường thuật về chủ ngữ. Vị ngữ cũng có thể do
                        một từ hoặc một cụm từ tạo thành.
                      </li>
                      <li>
                        Quan hệ chủ ngữ và vị ngữ: Chủ ngữ và vị ngữ là hai phần
                        nòng cốt của câu bình thường. Thường thì câu có đầy đủ
                        hai phần đó mới có khả năng thông báo một ý trọn vẹn.
                      </li>
                    </div>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Noọng slon
                      slư (em học). Noọng (chủ ngữ) và slon slư (vị ngữ)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      CÂU ĐẶC BIỆT
                    </p>
                    <span>
                      Là loại câu không thể chia ra được chủ ngữ và vị ngữ
                      (không thông dụng, chỉ được dùng trong trường hợp nói ngắn
                      gọn).
                    </span>
                    <br></br>
                    <div className={classes.noidung}>
                      <li>Khi gọi, đáp (Pú!: ông!)</li>
                      <li>
                        Khi biểu thị những sắc thái tình cảm (Bân đin ơi!: trời
                        đất ơi!)
                      </li>
                      <li>Khi biểu thị sự tồn tại (Tàu bên!: máy bay!)</li>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      CÁC LOẠI CÂU
                    </p>
                    <span>
                      Mục đích chung của câu là thông báo một ý nghĩ, một tình
                      cảm. Chúng ta có thể chia thành 4 loại câu sau:
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Câu kể: Nói về hoạt động, trạng thái, tính chất hay
                        chủng loại của đối tượng.
                      </li>

                      <li>
                        Câu hỏi: Nhắm mục đích nêu lên điều thắc mắc và đòi
                        người khác trả lời.
                      </li>
                      <li>
                        Câu cầu khiến: Nêu lên nguyện vọng, ý chí của người nói
                        và mong mỏi, đòi hỏi những điều đó được thực hiện.
                      </li>

                      <li>
                        Câu cảm xúc: Nhằm mục đích biểu thị những sắc thái tình
                        cảm khác nhau của người nói.
                      </li>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button onClick={closeModalCau} appearance="subtle">
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

export default Cau;
