import Image from "next/image";
import { formatNumber, shorten } from "@/lib/utils";
import { VideoJSON } from "./common";

interface IProps {
  video: VideoJSON;
}

export default function VideoSearchCard({ video }: IProps) {
  return (
    <div className="flex items-start w-full gap-3">
      <div className="relative">
        <Image
          src={video.thumbnail.url}
          alt={video.id}
          width={360}
          height={200}
          className="rounded-xl"
        />
        <span className="absolute bottom-[5px] right-[5px] bg-gray-900 text-primary-foreground text-sm px-1 rounded-sm">
          {video.duration_formatted}
        </span>
      </div>
      <div className="flex-1">
        <h1 className="font-semibold" title={video.title}>
          {shorten(video.title, 80)}
        </h1>
        <p className="text-xs text-muted-foreground">
          <span>{formatNumber(video.views)}</span> •{" "}
          <span>{video.uploadedAt}</span>
        </p>
        <p className="text-muted-foreground text-sm my-3">
          {video.channel.name}
        </p>
        <p className="text-xs text-muted-foreground">{video.description}</p>
      </div>
    </div>
  );
}