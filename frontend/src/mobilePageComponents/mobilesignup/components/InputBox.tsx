"use client";
import { SignUpText, SignUpItem } from "../Signup.styled";

const InputBoxItem = ({ title, children }: any) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "80vh" }}>
      <SignUpText>{title}</SignUpText>
      {children}
    </div>
  );
};

export default InputBoxItem;
