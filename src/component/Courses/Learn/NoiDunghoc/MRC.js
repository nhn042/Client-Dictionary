import React from "react";
import Button from "@atlaskit/button/standard-button";
import VidForwardIcon from '@atlaskit/icon/glyph/vid-forward'
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

export const MRC = ({ closeModalMRC }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ModalTransition>
      <ModalDialog onClose={closeModalMRC} width="x-large">
        <Form>
          {({ formProps }) => (
            <form id="morongcau" {...formProps}>
              <ModalHeader>
                <ModalTitle>
                  <div>
                    {" "}
                    <h4 className={classes.title}>MỞ RỘNG CÂU</h4>
                  </div>
                  <div className={classes.noidungtieude}>
                  <VidForwardIcon primaryColor="red" size="small" label="" /> Mở rộng câu tức là thêm thành phần phụ vào để bổ sung nghĩa cho cả phần nòng cốt của câu. Căn cứ vào đặc điểm về ý nghĩa và ngữ pháp ta có thể chia các bộ phận mở rộng của câu thành hai loại là trạng ngữ và thành phần biệt lập.
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
                      TRẠNG NGỮ
                    </p>
                    <span>
                      Trạng ngữ là phần phụ của câu dùng để biểu thị các ý nghĩa về thời gian, nơi chốn, nguyên nhân, mục đích, điều kiện.
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Trạng từ thời gian: loại trạng ngữ này biểu thị thòi gian của sự việc được nêu ở phần nòng cốt của câu. Nó thường nó từ hay một cụm từ được chia thành trạng từ không có quan hệ và có quan hệ.
                      </li>
                      <li>
                        Trạng từ nơi chốn: trạng ngữ nơi chốn biểu thị nơi xảy ra sự việc được nêu ở phần nòng cốt của câu. Nó thường do một từ, một cụm từ tạo thành.
                      </li>
                      <li>
                        Trạng từ nguyên nhân: trạng ngữ nguyên nhân thường do quan hệ từ nhoỏng (vì, bởi vì) và cả quan hệ từ vì, tại mượn từ tiếng Việt, kết hợp với một từ hay một cụm từ tạo thành.
                      </li>
                      <li>
                        Trạng từ mục đích: trạng ngữ chỉ mục đích do quan hệ từ sle (đế) kết hợp với một từ, một cụm từ tạo thành.
                      </li>
                      <li>
                        Trạng từ giả định: trạng ngữ giả định đừng sau quan hệ từ vảng (nếu)
                      </li>
                      <li>
                        Trạng từ nhượng bộ: trạng ngữ nhượng bộ có thể là một từ hay một cụm từ. Những đơn vị này có khi nằm trong cặp quan hệ từ mải...lọ (dù...nhưng).
                      </li>
                      <li>
                        Trạng từ điều kiện: trạng ngữ điều kiện thường do những quan hệ từ rèo, nèm (theo) hoặc những cặp quan hệ từ kết hợp với một từ hay một cụm từ.
                      </li>
                    </div>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      THÀNH PHẦN BIỆT LẬP CỦA CÂU
                    </p>
                    <span>
                      Ngoài trạng ngữ còn có thành phần xen vào trong câu cốt đề giải thích một từ, một cụm từ nào đó, hoặc để biểu thị thái độ, tìm cảm của người nói hay người viết.
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Đồng ngữ: sau một danh từ, đại từ xưng hô, người ta có thể đặt một từ hay mốt số từ để nói rõ thêm sự vật mà các từ đó biểu thị. Đồng ngữ là một loại biến dạng của định ngữ nó xác định danh từ, đại từ đúng trước nó.
                      </li>
                      <li>
                        Lời cảm thán: lời cảm thán là thành phận biệt lập của câu dùng để bày tỏ thái độ, tình cảm của người nói hoặc người dùng để gọi đáp.
                      </li>
                      <li>
                        Lời chêm: lời chêm có tác dụng nói lên quan hệ của người nói đối với sự việc nêu ra trong câu hoặc lời tác giả muốn ghi một chi tiết nào đó có quan hệ đến một phần của câu hay cả câu.
                      </li>
                      <li>
                        Lời chuyển tiếp: lời chuyển tiếp luôn luôn đặt ở đầu câu. Chúng có tác dụng biểu thị sự chuyển tiếp giữa các đoạn văn dài.
                      </li>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button onClick={closeModalMRC} appearance="subtle">
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

export default MRC;
