import VideoPage from "@/components/VideoPage/VideoPage";

interface PageUserProps {
  params: {
    id: string;
  };
}

export default function PageVideo({ params: { id } }: PageUserProps) {
  console.log(id);

  return (
    <main>
      <h2>Страница с видео номер {id}</h2>
      <VideoPage id={id} />
    </main>
  );
}
