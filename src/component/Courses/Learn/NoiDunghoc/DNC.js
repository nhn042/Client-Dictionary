import React from "react";
import Button from "@atlaskit/button/standard-button";
import Task16Icon from "@atlaskit/icon-object/glyph/task/16";
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

export const DNC = ({ closeModalDNC }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ModalTransition>
      <ModalDialog onClose={closeModalDNC} width="x-large">
        <Form>
          {({ formProps }) => (
            <form id="daungatcau" {...formProps}>
              <ModalHeader>
                <ModalTitle>
                  <div>
                    {" "}
                    <h4 className={classes.title}>DẤU NGẮT CÂU</h4>
                  </div>
                  <div className={classes.noidungtieude}>
                  <VidForwardIcon primaryColor="red" size="small" label="" /> Dấu ngắt câu giúp cho người đọc hiểu đoạn văn được dễ dàng và chính xác. Vì thế khi chúng ta viết ra những câu, đoạn văn dài mà không có dấu ngắt câu thì người đọc sẽ khó hiểu.
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
                      DẤU CHẤM (.)
                    </p>

                    <span>
                      Dấu chấm được dùng ở cuối câu kể và cả những câu đặc biệt
                      chuyên chỉ nơi chốn, thời gian, nơi xuất sứ...
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Pi 1938. (năm
                      1938.)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU HỎI (?)
                    </p>

                    <span>
                      Cuối câu hỏi trực tiếp, dù là câu hỏi thuộc loại nào bao
                      giờ cũng có dấu hỏi.
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        dấu hỏi đặt sau một thành phần hay hai thành phần.
                      </li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Noọng hêt
                        răng? (em làm gì?)
                      </div>
                      <li>
                        dấu hỏi đặt sau một từ, một cụm từ nêu lên sự khó hiểu
                        thì dẩu hỏi thường đặt trong dấu ngoặc đơn.
                      </li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Te slinh pi
                        1940 (?) (nó sinh năm 1940 (?))
                      </div>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU THAN (!)
                    </p>

                    <span>
                      Dấu than dùng ở cuối câu cảm xúc và câu cầu khiến để chỉ
                      ra những linh cảm khác nhau của lời nói như: sự vui buồn,
                      sự ngạc nhiên, sự than vãn hoặc ra lệnh:
                    </span>
                    <div className={classes.noidung}>

                        <li>Sau câu cảm xúc</li>
                        <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Bân fạ ời!
                        (trời đất ơi!)
                      </div>
                      <li>Sau những câu cầu khiến</li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Pây khoái!
                        (đi mau!)
                      </div>
                      <li>Sau những lời gọi đáp</li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Tý! pây
                        tình ủ ban hấu bạc ít đeo (Tý! đi trình ủy ban cho bác
                        một tí.)
                      </div>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU CHẤM PHẨY (;)
                    </p>

                    <span>
                      Dấu chấm phẩy là dấu trung gian giữa dấu phẩy và dấu chấm.
                      Nó dùng để ngắt những phần của câu:
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Tóc lăng xá
                      phán vần ngòa, tỉ nà nặm mên thuốm : tỉ nà lẹng ngám đo
                      nặm. (sau cơn mưa hôm qua, nơi đồng bị ngập : nời đồng cạn
                      vừa đủ nước.)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU PHẨY (,)
                    </p>

                    <span>
                      Dấu phẩy là dấu thường dùng nhất trong khi viết. Nó được
                      dùng trong những trường hợp sau:
                    </span>
                    <div className={classes.noidung}>
                      <li>Ngắt những phần lồng</li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Bại gia
                        đình, bại hợp tác, bại trại khun liệng lèo hết rườn hầu
                        sluc sleng. (các gia đình, các hợp tác, các trại chăn
                        nuôi nên làm nhà riêng cho gia súc.)
                      </div>
                      <li>Ngắt trang ngữ với các phần khác của câu</li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Dù chang
                        ngản, mạy cải mì lai. (ở trong rừng già, có nhiều cây to
                        lắm.)
                      </div>
                      <li>Ngắt các thành phần biệt lập</li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Chài ơi,
                        pây liều nớ? (anh ơi, đi chơi chứ?)
                      </div>
                      <li>Ngắt những phần của câu ghép</li>
                    </div>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Bấu tán slủng
                      cao xạ chắng bắn tóc tầu bên Mị, slủng sláy tố bắn tóc.
                      (không những súng cao xạ mới bắn rơi máy bay Mỹ, súng bộ
                      binh cũng bắn rơi.)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU HAI CHẤM (:)
                    </p>

                    <span>Dấu hai chấm dùng trong các trường hợp sau:</span>
                    <div className={classes.noidung}>
                      <li>Khi muốn trích dẫn lời người khác</li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Cá Đào à,
                        cằm thá ké cạ : cằm tại tả hầu quây (anh Đào ạ, người
                        già nói : hãy bỏ xa những lời ác.)
                      </div>
                      <li>
                        Khi liệt kê một số sự vật có tác dụng nói rõ cho phần
                        trước
                      </li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Da tảng
                        chát toọc táng hêt : nặm xà phòng, nặm đắng, nặm phon...
                        (thuốc chống chất độc tự chế : nước xà phòng, nước tro,
                        nước vôi...)
                      </div>
                    </div>

                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU NGẠCH NGANG (-)
                    </p>

                    <span>
                      Dầu ngạch gang thường được dùng để tách phần biệt lập xen
                      vào giữa chủ ngữ, vị ngữ của câu hoặc nối hai hay nhiều
                      danh từ riêng.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Kha tàng Cao
                      Bằng - Lạng Sơn (con đường Cao Bằng - Lạng Sơn)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU NGOẠC ĐƠN (())
                    </p>

                    <span>
                      Dấu ngoặc đơn dùng để đánh dấu những lời giải thích, lời
                      chú giải của tác giả hay của ban biên tập.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Pi át dạu
                      (1945) nước hây độc lập (Năm ất dậu (1945) nước ta độc
                      lập.)
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU NGOẶC KÉP ("")
                    </p>

                    <span>
                      Dầu ngoặc kếp có nhiều chức năng khác nhau. Những đơn vị
                      thường nằm trong ngoặc kép thường là:
                    </span>
                    <div className={classes.noidung}>
                      <li>
                        Những lời của người khác được tác giả dẫn ra trong bài
                        của mình
                      </li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Cằm Bạc cạ:
                        "bấu mì răng băt pẻng táy độc lập tự do" (lời Bác
                        dạy:"không có gì quý hơn độc lập tự do".)
                      </div>
                      <li>
                        Tên sách báo, đầu đề bài viết và cả tên gọi những phong
                        trào.
                      </li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Công tác
                        "slam lau" (công tác "ba thu")
                      </div>
                      <li>
                        Những từ, cụm từ được dùng với tính chất tạm thời hoặc
                        với mục đích mỉa mai, châm biến.
                      </li>
                      <div className={classes.thidu}>
                        <Task16Icon size="large" label="" /> Thí dụ: Hợi khoan
                        "thần sấm" vạ "tua phi" (hỡi hồn "thần sấm" với "con
                        ma")
                      </div>
                    </div>
                    <br></br>
                    <p className={classes.tieude}>
                      {" "}
                      <NewFeature16Icon size="large" label="" />
                      DẤU NHIỀU CHẤM (...)
                    </p>

                    <span>
                      Dầu nhiều chấm dùng ở đằng sau một từ, một cụm từ hay một
                      câu để nói lên những ý trong đó chưa nêu ra hết được nhưng
                      nêu ra từng ấy cũng đã đủ.
                    </span>
                    <div className={classes.thidu}>
                      <Task16Icon size="large" label="" /> Thí dụ: Rựp đăm, chăn
                      lai vieecjL hap nặm, hung khấu, khun mu... (chập tối, thật
                      lắm việc: gánh nước, nấu cơm, cho lợn ăn...)
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button onClick={closeModalDNC} appearance="subtle">
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

export default DNC;
