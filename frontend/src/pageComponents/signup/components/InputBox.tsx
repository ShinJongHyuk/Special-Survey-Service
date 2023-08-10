"use client";
import { SignUpText, SignUpItem } from "../Signup.styled";

const InputBoxItem = ({ title, children }: any) => {
  return (
    <SignUpItem>
      <SignUpText>{title}</SignUpText>
      {children}
    </SignUpItem>
  );
};

export default InputBoxItem;
