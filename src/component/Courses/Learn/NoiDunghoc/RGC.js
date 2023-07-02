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

export const RGC = ({ closeModalRGC }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ModalTransition>
      <ModalDialog onClose={closeModalRGC} width="x-large">
        <Form>
          {({ formProps }) => (
            <form id="rutgoncau" {...formProps}>
              <ModalHeader>
                <ModalTitle>
                  <div>
                    {" "}
                    <h4 className={classes.title}>RÚT GỌN CÂU</h4>
                  </div>
                  <div className={classes.noidungtieude}>
                  <VidForwardIcon primaryColor="red" size="small" label="" /> Trong nói năng hằng ngày cũng như trong văn viết nếu hoàn cảnh nói năng cho phép, nhiều khi ta lược bớt một số phần mà người nghe hay người đọc vẫn hiểu được. Câu bị lược đó gọi là câu rút gọn.
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
                      BỎ CHỦ NGỮ
                    </p>

                    <span>
                      Chúng ta thường bỏ chủ ngữ của câu trong những trường hợp sau:
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Khi mình tự nói với mình hoặc khi mình nói chuyện với người quen thân người ngang hàng.
                      </li>
                      <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: ~ dac lai. (~ đói lắm)
                    </div>
                      <li>
                        Khi dùng những từ cầu mong, mời mọc, ra lệnh yêu cầu người khác.
                      </li>
                      <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: ~ pây lú vầy! (~ đi đi thôi!)
                    </div>
                      <li>
                        Khi câu nọ nối tiếp câu kia mà một trong những câu ấy đã có chũ ngữ hoặc chủ ngữ đã được xác định.
                      </li>
                      <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: ~ Lan pây tầu chế? (cháu đi đâu đấy?)
                    </div>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      BỎ VỊ NGỮ
                    </p>
                    <span>
                      Vị ngữ thường bị lược bỏ trong những lời đối đáp giữa hai người, nhất là khi ở phần chủ ngữ của câu hỏi có đại từ để hỏi như: cầu (ai).
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Tua răng kin nà? (con gì ăn lửa?)
                    </div>
                    <span>
                      Ngoài điều kiện trên vị ngữ còn bị lược bỏ khi hai câu nối tiếp nhau mà lại biểu thị hoạt động, trạng thái trái ngược nhau.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Nỉ đảy váng lẻ pây lè. Ngỏ bấu ~ a (anh có rồi thì đi đi. Tôi không ~ đâu.)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                     BỎ CẢ CHỦ NGỮ LẪN VỊ NGỮ
                    </p>
                    <span>
                      Có thể bỏ cả phần nòng cốt của câu khi người hỏi chỉ cần biêt hoàn cảnh, đối tượng bị hoạt động chi phối.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Vằn tầu chài pây? (Hôm nào anh đi?)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                     BỎ PHẦN PHỤ
                    </p>
                    <span>
                      Phần phụ được lược bỏ trong những câu nối tiếp nhau.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Hăn pâu dư pja hây tố dự ~. (thấy người mua cá mình cũng mua ~.)
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button onClick={closeModalRGC} appearance="subtle">
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

export default RGC;
