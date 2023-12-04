import React from "react";
import {
  Centered,
  CloseBtn,
  DarkBg,
  Header,
  Modal,
  ModalContent,
  
} from "./customModal.style";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalProps {
  setIsOpen?: any;
  header?: string;
  children: React.ReactNode

}
function CustomModal({setIsOpen, header, children}:ModalProps) {
  return (
    <div>
      <DarkBg >
        <Centered>
          <Modal>
            <div className="flex justify-between">
              <Header>{header}</Header>{" "}
              <CloseBtn onClick={() => setIsOpen(false)}>
                <IoCloseCircleOutline />
              </CloseBtn>
            </div>

            <ModalContent>
            {children}
              </ModalContent>
          </Modal>
        </Centered>
      </DarkBg>
    </div>
  );
}

export default CustomModal;
