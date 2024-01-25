import axios from "../axios"

export const getCurrentApi = async (token?: string) => {
    const res = await axios.get("/user/get-current", {
        headers: { authorization: `Bearer ${token}` }
    })
    return res.data as any
}

export const getUsers = async () => {
    const res = await axios.get("/user/get-users")
    return res.data as any
}
export const deleteUser = async (id: string) => {
    const res = await axios.delete(`/user/delete-user/${id}`)
    return res.data as any
}

export const updateUser = async (id: string, data: any) => {
    const res = await axios.put(`/user/update-user/${id}`, data)
    return res.data as any
}

