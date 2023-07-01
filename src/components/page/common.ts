import type { Video } from "youtube-sr";

export type VideoJSON = ReturnType<Video["toJSON"]>;
