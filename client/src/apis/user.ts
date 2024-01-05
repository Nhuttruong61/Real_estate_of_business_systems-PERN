import axios from "../axios"

export const getCurrentApi = async () => {
    const res = await axios.get("/user/get-current")
    return res.data as any
}

export const getUsers = async () => {
    const res = await axios.get("/user/get-users")
    return res.data as any
}


