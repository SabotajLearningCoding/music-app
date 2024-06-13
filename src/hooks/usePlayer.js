import { useFetch } from "./useFetch";

export default function Player() {
  const { data, isLoading, error } = useFetch(
    "https://api.spotify.com/v1/albums/"
  );

  if (isLoading) {
    return <p>Loading...</p>; // Render a loading indicator if data is still loading
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Render an error message if fetch fails
  }

  // Ensure data is not undefined and has the expected structure
  if (!data || !data.items || data.items.length === 0) {
    return <p>No albums found.</p>; // Render a message when no data or items are available
  }

  // Assuming `data` is the response data fetched from the API
  return (
    <div>
      {/* Render your component UI based on `data` */}
      <h1>Albums</h1>
      <ul>
        {data.items.map((album) => (
          <li key={album.id}>{album.name}</li>
        ))}
      </ul>
    </div>
  );
}
