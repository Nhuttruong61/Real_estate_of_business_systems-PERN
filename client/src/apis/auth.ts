import axios from "../axios"

export const registerApi = async (data: any) => {
    return await axios.post("/auth/register", data)
}

export const signApi = async (data: any) => {
    return await axios.post("/auth/sign-in", data)

}