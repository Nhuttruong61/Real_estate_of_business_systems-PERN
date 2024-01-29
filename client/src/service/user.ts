import { getUsserId } from "@/apis/user"

export const findUser = async (id: string) => {
    const res = await getUsserId(id)
    return res
}