import React from "react";
import { Centered, CloseBtn, DarkBg, Header, Modal, ModalContent, ModalHeader } from "./customModal.style";

interface ModalProps {
  setIsOpen?: any;
}
function CustomModal({ setIsOpen }: ModalProps) {
  return (
    <div>
      <DarkBg onClick={() => setIsOpen(false)}>
        <Centered>
          <Modal>
            <ModalHeader>
              {" "}
              <Header>This is Header</Header>{" "}
            </ModalHeader>

            < CloseBtn onClick={()=>setIsOpen(false)}>
            close
            </CloseBtn>

            <ModalContent>
                Are u sure of what u are doing?
            </ModalContent>
          </Modal>
        </Centered>
      </DarkBg>
    </div>
  );
}

export default CustomModal;
