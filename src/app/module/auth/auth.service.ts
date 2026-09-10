import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

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

    try{
        const patient = await prisma.$transaction(async (tx) => {
        const patientTx = await tx.patient.create({
            data :{
                userId : data.user.id,
                email : payload.email
            }

            
        })
        return patientTx;
    })

    return {
        ...data,
        patient
    }

    }catch(err){
        console.log(err);
        throw Error;
        await prisma.user.delete({
            where:{
                id : data.user.id
            }
        })
    }
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