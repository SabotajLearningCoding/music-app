import { useFetch } from "./useFetch";

export default function usePlayer() {
  const { response } = useFetch("https://api.spotify.com/v1/albums/");

  return { player: response };
}
