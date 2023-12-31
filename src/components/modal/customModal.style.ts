import styled from "styled-components";

export const DarkBg = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  min-height: 140vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  position: absolute;
  

  
`;
export const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 40%;

  @media (max-width: 60px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }

`;

export const Modal = styled.div`
  width: 100%;
  min-height: 170px;
  background: white;
  /* color: white; */
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  padding: 20px !important;
  
  @media (max-width: 768px) {
    /* width: 90%; */
    padding: 10px !important;
  }
  @media (max-width: 375px) {
    /* width: 90%; */
    padding: 5px !important;
  }

`;



export const Header = styled.h5`
  margin: 0;
  padding: 10px;
  color: #1A8F4A;

  text-align: center;
  font-weight: 700;
  font-size: 25px;
`;
export const ModalContent = styled.p`
  padding: 10px;
  font-size: 14px;
  /* z-index: 9999; */
  /* color: #2c3e50; */

  /* text-align: center; */
`;



export const CloseBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  
  transition: all 0.25s ease;

`