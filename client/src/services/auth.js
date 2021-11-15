import axios  from "axios";

export const signupUser = async (data) =>{
    try{
        const res = await axios.post("http://localhost:5000/api/auth/register" ,data);
        return res;       
    }catch(err)
    {
        console.log(err);
    }
}