import type { signupformvalue } from "../../type/interface/auth.interface";
import type { DynamicInputProps } from "../../type/type/component.type";



export const signupinputfield:Array<Omit<DynamicInputProps<signupformvalue>, "register" | "errors">> = [
    {
        name:"name",
        label:"Enter Full Name",
        type:"text",
        required:true,
        placeholder: "John Doe"
    },
    {
        name:"email",
        label:"Enter Email Address",
        type:"email",
        required:true,
        placeholder: "john@gmail.com"
    },
    {
        name:"password",
        label:"Enter Password",
        type:"password",
        required:true,
        placeholder: "john@123"
    }
]