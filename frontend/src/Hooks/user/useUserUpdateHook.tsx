import useUserStore from "@/stores/useUserStore";
import { useLogoutHook } from "./useLogoutHook";
import { useEffect, useState } from "react";
import userUpdatePatch from "@/api/user/userUpdatePatch";
import userDelete from "@/api/user/userDelete";
import { useRouter } from "next/navigation";

export const useUserUpdateHook = () => {
  const setUserInformation = useUserStore((state: any) => state.setUserInformation);
  const user = useUserStore((state: any) => state.userInformation);
  const router = useRouter();
  const { hanedleLogout } = useLogoutHook();
  const [password2, setPassword] = useState("");
  const [inputState, setInputState] = useState({
    email: "true",
    password: "true",
    password2: "true",
    name: "true",
    birthday: "true",
    phoneNumber: "true",
    age: "true",
  });

  const [newUser, setNewUser] = useState({
    email: user?.email,
    password: "",
    name: user?.name,
    birthday: user?.birthday,
    phoneNumber: user?.phoneNumber,
    age: user?.age,
  });

  const [postUser, setPostUser] = useState({});

  const hanleChange = (e: any) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });

    setPostUser({
      ...postUser,
      [name]: value,
    });

    setInputState({
      ...inputState,
      [name]: 1,
    });
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleage = (e: any) => {
    setNewUser({
      ...newUser,
      ["age"]: e.target.id,
    });
    setPostUser({
      ...postUser,
      ["age"]: e.target.id,
    });
  };

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 비밀번호 입력했을 때
    if (newUser.password) {
      if (!passwordRegex.test(newUser.password)) {
        setInputState({
          ...inputState,
          ["password"]: "false",
        });
        alert("비밀번호 형식을 맞춰주세요");
        return;
      } else if (password2 === "") {
        setInputState({
          ...inputState,
          ["password2"]: "false",
        });
        alert("비밀번호를 한번 더 입력해주세요");
        return;
      } else if (newUser.password !== password2) {
        alert("비밀번호를 다시 확인해주세요");
        return;
      }
    }

    if (user.name === "") {
      setInputState({
        ...inputState,
        ["name"]: "false",
      });
      alert("이름을 입력해주세요");
      return;
    } else {
      try {
        const res = await userUpdatePatch(postUser);
        if (res.data.success === true) {
          router.push("/");
          setUserInformation(res.data.response);
        } else {
          alert(res.data.apiError.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDeleteUser = async () => {
    const res = await userDelete();
    if (res.data.success === true) {
      router.push("/");
      hanedleLogout();
      alert("회원탈퇴에 성공하였습니다");
    } else if (res.data.success === false) {
      alert(res.data.apiError.message);
    }
  };
  return { user, inputState, newUser, handleSubmit, hanleChange, handlePassword, handleage, handleDeleteUser };
};
