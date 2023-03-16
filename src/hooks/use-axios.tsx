import axios from "axios"
import { useEffect, useState } from "react"

export default function useAxios(path: string, method: string, body: any = null) {

    const [data, setData] = useState<any[] | null>(null)
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.request({
            method: method,
            url: 'http://localhost:3001/api/v1' + path,
        }).then(({ data }) => {
            setData(data)
        }).catch(err => {
            setErr(err.toString())
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return { data, err, loading }
}