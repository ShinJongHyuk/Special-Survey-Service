interface User {
  email: string;
  gender: string;
  tel: string;
  age: string;
  certNum: string;
}

export interface SignupHookType {
  user: User;
  isCert: {
    email: string;
    tel: string;
    certNum: string;
    password: boolean;
  };
  handleSubmit: (e: any) => void;
  handleClick: (e: any) => void;
  Certification: (e: any) => void;
  duplicationEmail: (e: any) => void;
  duplicationPhoneNumber: (e: any) => void;
  changeUserValue: (e: any) => void;
  SendCertNum: (e: any) => void;
}
