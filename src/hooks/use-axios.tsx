import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config/constants"

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export function useAxios<T>() {

    const [data, setData] = useState<T | null>(null)
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)


    const operation = async (path: string, method: HttpMethod, body: any = null) => {
        try {
            console.log(path)
            setLoading(true)
            const response = await axios.request({
                method: method,
                url: path,
                data: body,
                baseURL: BACKEND_URL,
            })
            setData(response.data)
        } catch (e: any) {
            setErr(e.toString)
        } finally {
            setLoading(false)
        }
    }

    return { data, err, loading, operation }
}