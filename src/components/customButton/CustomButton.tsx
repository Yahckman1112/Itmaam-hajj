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

// #E5EFFF




// font-weight: 700;
// color: #2d2c2c;
// text-transform: uppercase;


// font-family: 'Open Sans', sans-serif;
// font-size: 14px;
// line-height: 2;
// font-weight: 400;
// color: #929191;
// -webkit-font-smoothing: antialiased;
// -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
// text-shadow: rgba(0,0,0,.01) 0 0 1px;