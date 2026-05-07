import type { Loginformvalue } from "../../type/interface/auth.interface";
import type { DynamicInputProps } from "../../type/type/component.type";


export const logininputfield:Array<Omit<DynamicInputProps<Loginformvalue>, "register" | "errors">> = [
   
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