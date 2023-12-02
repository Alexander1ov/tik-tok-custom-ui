import Image from "next/image";
import "./globals.scss";
import VideoFeed from "@/components/Feed/Feed";

export default function Feed() {
  return (
    <main>
      <h2>Лента</h2>
      <VideoFeed />
    </main>
  );
}
