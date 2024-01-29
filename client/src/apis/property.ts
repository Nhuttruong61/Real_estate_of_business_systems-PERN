import axios from "../axios"
export const getAllProperty = async (limit: number) => {
    const res = await axios.get(`/property/gets-property?limit=${limit}`)
    return res.data as any
}