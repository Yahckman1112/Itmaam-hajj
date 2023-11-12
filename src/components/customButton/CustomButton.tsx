import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(to right,#ffc107, #007bffe0);
  &:hover{
    
    background: linear-gradient(to right,#007bffe0, #ffc107 );
  }
`;

interface BtnProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | undefined;
}

function CustomButton({ children, className, onClick, type }: BtnProps) {
  return (
    <Button
      type={type || "submit"}
      onClick={onClick}
      className={
        className
          ? className
          : " text-base text-white font-bold uppercase px-14 py-3 hover:scale-110 transition-transform duration-500 transform  rounded-full "
      }
    >
      {children}
    </Button>
  );
}

export default CustomButton;




