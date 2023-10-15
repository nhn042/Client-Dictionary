import React, { useCallback, useState } from "react";
import Button from "@atlaskit/button/standard-button";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

const useStyles = makeStyles((theme) => ({
    boxVideo: {
      width: "100%",
      height: "100%",
    },
    video: {
      width: "100%",
      height: "100%",
    }
  }));
const Example = (props) => {
  // eslint-disable-next-line no-undef
  const classes = useStyles();
  const { t } = useTranslation();
  const { isOpentest, closeModal } = props;
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  //   const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ModalTransition>
      {isOpentest && (
        <Modal
          onClose={closeModal}
          marginTop="50px"
          width="1000px"
          height="90%"
        >
          <div className={classes.boxVideo}>
            {/* <video className={classes.video} controls>
              <source src="https://www.youtube.com/embed/Q72P9F1NM3s" type="video/mp4" /> */}
              {/* <iframe width="1268" height="713" src="https://www.youtube.com/embed/Q72P9F1NM3s" title="Học tiếng Tày - Nùng Online. Bài 4: Số đếm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
              {/* <source src="movie.ogg" type="video/ogg"/> */}
              {/* Your browser does not support the video tag.
            </video> */}
            <iframe className={classes.video} src="https://www.youtube.com/embed/Q72P9F1NM3s" title="Học tiếng Tày - Nùng Online. Bài 4: Số đếm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Modal>
      )}
    </ModalTransition>
  );
};

export default Example;
