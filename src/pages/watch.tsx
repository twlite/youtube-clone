import VideoSearchCard from "@/components/page/VideoSearchCard";
import { VideoJSON } from "@/components/page/common";
import { fetcher } from "@/lib/utils";
import { useRouter } from "next/router";
import useSWR from "swr";

// TODO: add watch page
export default function Watch() {
  const router = useRouter();
  const { q } = router.query;

  const {
    data: videos,
    error,
    isLoading,
  } = useSWR<VideoJSON[]>(() => {
    if (!q) {
      router.replace("/");
      return null;
    }
    return `/api/search?query=${q}`;
  }, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-4 gap-4 my-4">
      <div className="col-span-3"></div>
      <div>
        {videos?.map((video) => (
          <VideoSearchCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
