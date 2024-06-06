"use server"
import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [response, setResponse] = useState()

    useEffect(() => {
        async () => {
            try {
                const RESPONSE = await axios.get(url)
                setResponse(RESPONSE.data)
            } catch (err) {
                console.log(err);
                
            }
        }
    }, [url])


    return { response }
}