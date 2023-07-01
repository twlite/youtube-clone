import VideoCard from "@/components/page/VideoCard";
import { VideoJSON } from "@/components/page/common";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";

export default function Home() {
  const {
    data: videos,
    error,
    isLoading,
  } = useSWR<VideoJSON[]>("/api/home", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-4 grid-flow-row gap-5 my-5">
      {videos!.map((video) => {
        return <VideoCard key={video.id} video={video} />;
      })}
    </div>
  );
}
