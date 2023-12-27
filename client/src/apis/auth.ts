import axios from "../axios"

export const registerApi = async (data: any) => {
    const res = await axios.post("/auth/register", data)
    return res.data as any
}

export const signApi = async (data: any) => {
    const res = await axios.post("/auth/sign-in", data)
    return res.data as any

}