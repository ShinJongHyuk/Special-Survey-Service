import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SignupHookType } from "../types/useSignupHook.type";
import signupPost from "@/api/user/signupPost";
import loginPost from "@/api/user/loginPost";
import useUserStore from "@/stores/useUserStore";
import loginGet from "@/api/user/loginGet";
import messageCertPost from "@/api/user/messageCertPost";
import messageCertPost2 from "@/api/user/messageCertPost2";
import duplicationEmailPost from "@/api/user/duplicationEmailPost";
import duplicationPhoneNumberPost from "@/api/user/duplicationPhoneNumberPost";

const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
const phoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/;

export const useSignupHook = (): SignupHookType => {
  const login = useUserStore((state: any) => state.login);
  const setUserInformation = useUserStore((state: any) => state.setUserInformation);
  const [user, setUser] = useState({
    email: "",
    gender: "",
    tel: "",
    age: "",
    certNum: "",
    password: "",
  });
  const [isCert, setIsCert] = useState({
    email: "false",
    tel: "false",
    certNum: "false",
    password: false,
  });
  const router = useRouter();

  // state가 필요한 유저정보 변경
  const changeUserValue = (e: any) => {
    if (e.target.name === "email") {
      setUser((prev) => {
        return { ...prev, email: e.target.value };
      });
    }
    if (e.target.name === "phoneNumber") {
      setUser((prev) => {
        return { ...prev, tel: e.target.value };
      });
    }
    if (e.target.name == "certNum") {
      setUser((prev) => {
        return { ...prev, certNum: e.target.value };
      });
    }
    if (e.target.name == "password") {
      setUser((prev) => {
        return { ...prev, password: e.target.value };
      });
    }
  };

  // 성별 , 나이 버튼 클릭
  const handleClick = (e: any) => {
    if (e.target.name === "MAN" || e.target.name === "WOMAN") {
      setUser({
        ...user,
        gender: e.target.name,
      });
    } else {
      setUser({
        ...user,
        age: e.target.id,
      });
    }
  };

  const changePassWordCert = () => {
    setIsCert((prev) => {
      return {
        ...prev,
        password: passwordRegex.test(user.password),
      };
    });
  };

  const changeEmailCert = (status: string) => {
    setIsCert((prev) => {
      return {
        ...prev,
        email: status,
      };
    });
  };

  const changeTelCert = (status: string) => {
    setIsCert((prev) => {
      return {
        ...prev,
        tel: status,
      };
    });
  };

  // 이메일 중복 체크
  const duplicationEmail = async (e: any) => {
    if (!emailRegx.test(user.email)) {
      //바까야 한다 email 스테이트
      changeEmailCert("false");
      alert("이메일 양식이 유효하지 않습니다.");
    }
    const res = await duplicationEmailPost(user.email);
    if (res.data.success === true) {
      if (res.data.response.duplicate === true) {
        changeEmailCert("false");
        alert("이미 사용중인 이메일입니다.");
        return;
      }
      changeEmailCert("true");
      alert("이메일인증에 성공하였습니다.");
    }
  };

  // 휴대폰 중복 체크
  const duplicationPhoneNumber = async () => {
    const trimmedValue = user.tel.replace(/-/g, "");
    const newPhoneNumber = trimmedValue.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");

    if (newPhoneNumber) {
      const res = await duplicationPhoneNumberPost(newPhoneNumber);
      if (res.data.success === true) {
        if (res.data.response.duplicate === false) {
          changeTelCert("true");
          alert("사용 가능한 휴대폰 번호입니다.");
          const newPhoneNumber = user.tel.replaceAll("-", "");
          setUser((prev) => {
            return { ...prev, tel: newPhoneNumber };
          });
        } else if (res.data.response.duplicate === true) {
          changeTelCert("false");
          alert("이미 사용중인 휴대폰 번호입니다.");
        }
      } else if (res.data.success === false) {
        changeTelCert("false");
        alert(res.data.apiError.message);
      }
      return;
    }
    alert("입력해주세요");
  };

  // 문자 인증번호 보내기
  const SendCertNum = async () => {
    if (user.tel) {
      const res = await messageCertPost(user.tel);
      if (res.data.success === true) {
        alert("인증문자 전송이 완료되었습니다.");
      } else if (res.data.success === false) {
        alert(res.data.apiError.message);
      }
    }
  };

  // 문자 인증 확인
  const Certification = async () => {
    const data = {
      phoneNumber: user.tel,
      certAuthCode: user.certNum,
    };

    const res = await messageCertPost2(data);
    if (res.data.success === true) {
      setIsCert((prev) => {
        return {
          ...prev,
          certNum: "true",
        };
      });
      alert(res.data.response);
    } else if (res.data.success === false) {
      alert(res.data.apiError.message);
    }
  };

  // 회원가입 요청
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // 휴대폰 번호 변경
    const trimmedValue = user.tel.replace(/-/g, "");
    const newPhoneNumber = trimmedValue.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
      name: e.target.name.value,
      birthday: e.target.birthday.value,
      phoneNumber: newPhoneNumber,
      // 밑에 두개는 따로 처리바람
      gender: user.gender,
      age: user.gender,
    };

    if (!isCert.email) {
      alert("이메일 중복확인을 해주세요");
    } else if (!isCert.tel) {
      alert("전화번호 인증을 해주세요");
    } else if (!passwordRegex.test(data.password)) {
      alert("비밀번호 형식을 맞춰주세요");
      return;
    } else if (data.password2 === "") {
      alert("비밀번호를 한번 더 입력해주세요");
      return;
    } else if (data.password !== data.password2) {
      alert("비밀번호를 다시 확인해주세요");
      return;
    } else if (data.name === "") {
      alert("이름을 입력해주세요");
      return;
    } else if (data.birthday === "") {
      alert("생년월일을 입력해주세요");
      return;
    } else if (!phoneNumberRegex.test(data.phoneNumber)) {
      alert("휴대폰번호를 입력해주세요");
      return;
    } else if (user.gender === "") {
      alert("성별을 선택해주세요");
      return;
    } else if (user.age == "") {
      alert("나이대를 선택해주세요");
    } else {
      if (isCert.certNum === "true" && isCert.email === "true" && isCert.tel === "true") {
        const res = await signupPost(data);
        if (!res.data.success) {
          alert(res.data.apiError.message);
          return;
        }
        console.log(isCert);
        alert("회원가입에 성공하였습니다");
        const loginData = {
          email: data.email,
          password: data.password,
        };
        const loginRes = await loginPost(loginData);

        if (loginRes.data.success === false) {
          alert(res.data.apiError.message);
        }
        login();
        const response = await loginGet(loginRes.data.response.accessToken);
        await setUserInformation(response.data.response);
        router.push("/");
      } else {
        alert("모든인증을 마쳐야합니다.");
      }
    }
  };
  return {
    user,
    isCert,
    changeUserValue,
    handleSubmit,
    handleClick,
    SendCertNum,
    Certification,
    duplicationEmail,
    duplicationPhoneNumber,
    changePassWordCert,
  };
};
