interface User {
    email: string;
    password: string;
    name: string;
    birthday: string;
    phoneNumber: string;
    gender: string;
    age: string;
  }
  
export interface SignupHookType {
user: User;
inputState: {
    email: number;
    password: number;
    password2: number;
    name: number;
    birthday: number;
    phoneNumber: number;
    age: number,
    certNum : number
};
certNumState : boolean
isEmailCert: boolean
isCert: boolean
isPhoneNumberCert: boolean
handleChange: (e: any) => void;
handleSubmit: (e: any) => void;
handleClick: (e: any) => void;
handleCertNum : (e: any) => void;
ChangeCertNum : (e: any) => void;
Certification : (e: any) => void;
duplicationEmail : (e: any) => void;
duplicationPhoneNumber : (e: any) => void;

}