import axios from "axios"

export const getAllcity = async () => {
    const res = await axios.get("https://provinces.open-api.vn/api/?depth=1")
    return res
}