import axios from "../axios"
export const createPropertyType = async (data: any) => {
    const res = await axios.post("/properttype/create-propertytype", data)
    return res.data as any
}

export const getAllPropertyType = async (sort?: any) => {
    const res = await axios.get(`/properttype/get-all-propertytype`)
    return res.data as any
}
export const deletePropertyType = async (id: string) => {
    const res = await axios.delete(`/properttype/delete-propertytype/${id}`)
    return res.data as any
}
export const updatePropertyType = async (id: string, data: any) => {
    const res = await axios.put(`/properttype/update-propertytype/${id}`, data)
    return res.data as any
}