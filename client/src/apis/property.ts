import axios from "../axios"
export const getAllSort = async (sort: any, filter: any, limit: number, page: any) => {
    const res = await axios.get(`/property/gets-property?name=${filter}&&sort=${sort}&&limit=${limit}&&page=${page}`)
    return res.data as any
}

export const getAllProperty = async (limit: number) => {
    const res = await axios.get(`/property/gets-property?limit=${limit}`)
    return res.data as any
}