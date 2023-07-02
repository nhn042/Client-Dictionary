import React from "react";
import Button from "@atlaskit/button/standard-button";
import VidForwardIcon from '@atlaskit/icon/glyph/vid-forward'
import useStyles from './useStyles'
import NewFeature16Icon from "@atlaskit/icon-object/glyph/new-feature/16";

import ModalDialog, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

import { useTranslation } from "react-i18next";

import Form from "@atlaskit/form";


export const LT = ({ closeModalLT }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ModalTransition>
      <ModalDialog onClose={closeModalLT} width="x-large">
        <Form>
          {({ formProps }) => (
            <form id="loaitu" {...formProps}>
              <ModalHeader>
                <ModalTitle>
                  <div>
                    {" "}
                    <h4 className={classes.title}>LOẠI TỪ</h4>
                  </div>
                  <div className={classes.noidungtieude}>
                  <VidForwardIcon primaryColor="red" size="small" label="" /> Vốn từ của một ngôn ngữ rất phong phú và phức tạp. Tuy rằng mỗi từ đều có ý nghĩa riêng, nhưng không phải mỗi từ đều có đặc điểm ngữ pháp riêng. Do đó ta có 9 loại từ sau:
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
                      DANH TỪ
                    </p>

                    <span>
                    Danh từ là những từ biểu thị sự vật (sinh vật, vậ thể, thời gian, không gian và các hiện tượng thiên nhiên, xã hỗi)
                    </span>
                    <div className={classes.noidung}>
                        <li>
                        Khi làm vị ngữ trong câu bình thường phải kết hợp với các từ (lẻ: là, chử: phải, hêt: làm).
                        </li>
                        <li>
                        Khi làm từ chính trong cụm từ, hầu hết các danh từ có thể có từ chỉ số lượng như bại, slam.
                            </li>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      ĐỘNG TỪ
                    </p>
                    <span>
                    Động từ là những từ biểu thị các hoạt động (động tác, hành vi, biến hóa) và trạng thái của sự vật.
                    </span>
                    <br></br>
                    <div className={classes.noidung}>
                      <li>Khi làm vị ngữ trong câu bình thường không cần có từ (lẻ: là, hêt: làm).</li>
                      <li>Trong các cụm từ chính phụ có thể đặt trước từ (dá: rồi) và đặt sau các từ chỉ thời gian khác.</li>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      TÍNH TỪ
                    </p>
                    <span>
                    Tính từ là những từ biểu thị đặc trưng, tính chất của sự vật, của sự hoạt động và có những đặc điểm ngữ pháp là:
                      <br></br>
                      <div className={classes.noidung}>
                        <li>Có thể trực tiếp làm vị ngữ trong câu bình thường, không cần những từ (lẻ: là, pền: thành).</li>
                        
                        <li>Không thể kết hợp được với từ (cỏi: hãy).</li>
                      </div>
                    </span>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      ĐẠI TỪ
                    </p>
                    <span>
                      Đại từ là loại từ dùng để trỏ chứ không dùng để gọi tên các sự vật, các hiện tượng thiên nhiên, xã hội hoặc các tính chất.
                      <div className={classes.noidung}>
                       <li>Ít khi làm vị ngữ, nhưng khi đảm nhiệm vai trò ấy thì cần có từ (lẻ: là, chử: là phải).</li>
                       <li>Không có khả năng làm từ trung tâm trong cụm từ chính phụ. Cụ thể là bản thân đại từ không thể có từ phụ, nhất là từ phụ chỉ sở thuộc..</li>
                      </div>
                    </span>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      SỐ TỪ
                    </p>
                    <span>
                        Số từ là loại từ biểu thị số lượng và số lượng. Số từ không có khả năng làm từ trung tâm trong các cụm từ. Ta phân số từ thành hai loại sau:
                    </span>
                    <div>
                      <div className={classes.noidung}>
                        <li>Số từ số lượng: số từ số lượng là từ dùng để đếm hay dùng để biểu thị số lượng sự vật.</li>
                        <li>Số từ thứ tự: số từ thứ tự biểu thị thứ tự sự vật.</li>
                      </div>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      PHỤ TỪ
                    </p>
                    <div>
                      Phụ từ là những từ không dùng độc lập được. Phụ từ được chia làm 5 loại sau:
                      <div className={classes.noidung}>
                        <li>
                          Phụ từ đơn vị: thường biểu thị đơn vị, đồng thời cả chủng loại của sự vật nữa.
                        </li>
                        <li>
                          Phụ từ số lượng: xác định một tập hợp sự vật không tính đến số lượng cụ thể.
                        </li>
                        <li>
                          Phụ từ thời gian: dó là nhưng từ thường đi kèm theo tính từ và danh từ để bổ nghĩa cho chúng về thời gian.
                        </li>
                        <li>
                          Phụ từ phủ định: có tác dụng phủ định hoạt động, trạng thái, tính chất do động từ và tính từ biểu thị.
                        </li>
                        <li>
                          Phụ từ mức độ: biểu thị mức độ chỉ kết hợp được với tính từ và một số động từ chỉ hoạt động tâm lý.
                        </li>
                      </div>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      QUAN HỆ TỪ
                    </p>
                    <div>
                      Quan hệ từ là loại từ biểu thị quan hệ ngữ pháp giữa các đơn vị cấu tạo thành lời nói. Được chia làm hai lại sau:
                      <div className={classes.noidung}>
                        <li>
                          Quan hệ từ phụ thuộc: thường nêu lên mỗi quan hệ giữa phần phụ với phần trung tâm của cụm từ hoặc phần phụ với cả câu (Của: của, tẳm: tận).
                        </li>
                        <li>
                          Quan hệ từ liên hợp: thường dùng để nói những thanh phần có quan hệ ngang hàng với nhau (rụ: hoặc, rụ cà: hay là).
                        </li>
                      </div>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      TRỢ TỪ
                    </p>
                    <div>
                      Trợ từ là loại biểu thị thái độ của người nói, không có khả năng vân dụng độc lập và thường đặt ở cuối câu. Ta chia trợ từ thành các loại sau:
                      <div className={classes.noidung}>
                        <li>
                          Trợ từ dùng để cấu tạo câu hỏi: biểu thị sự không hài lòng, thái độ (nở: nhé, a rớ: hả).
                        </li>
                        <li>
                          Trợ từ dùng để cấu tạo câu cầu khiến: biểu thị sự ra lệnh, sai khiến (Kin pây!: Ăn đi!, Bạc chải dú nở!: bác nghỉ nhé!).
                        </li>
                        <li>
                          Trợ từ biểu thị thái độ: biểu thị sự thân mật, kính trọng, nhấn mạnh thêm sự khẳng định (Ạ: ạ, chầy: cơ, nẻ: đấy mà).
                        </li>
                        <li>
                          Trợ từ gọi đáp: biểu thị sự gọi đáp (Ới: ơi, ừ: vâng).
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button onClick={closeModalLT} appearance="subtle">
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

export default LT;
