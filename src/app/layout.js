import "./globals.css";

export const metadata = {
  title: "Music App",
  description: "music app using Spotify API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
