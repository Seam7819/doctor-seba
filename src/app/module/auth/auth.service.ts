import { auth } from "../../lib/auth";

interface IRegisterPayload {
    name: string;
    email: string;
    password: string;
}

const registerPatient = async (payload: IRegisterPayload) => {

    const {name,email,password} = payload;
    const data = await auth.api.signUpEmail({
        body :{
            name,
            email,
            password
        }
    })
    if(!data.user){
        throw new Error("Failed to register patient") 
    }

    return data;
}

interface ILogin {
    email: string,
    password: string
}

const logInPatient = async(payload :ILogin) =>{
    const {email,password} = payload;

    const data = await auth.api.signInEmail({
        body : {
            email,
            password
        }
    })
    return data;
}

export const authService = {
    registerPatient,
    logInPatient
}