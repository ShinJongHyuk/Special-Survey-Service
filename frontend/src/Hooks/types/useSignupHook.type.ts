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
    age: number
};
handleChange: (e: any) => void;
handleSubmit: (e: any) => void;
handleClick: (e: any) => void;
}