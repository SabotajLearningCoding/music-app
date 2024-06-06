import { useFetch } from "./useFetch";

export default function Player() {
    const { response } = useFetch("https://api.spotify.com/v1/albums/")

    return { Player: response}
}