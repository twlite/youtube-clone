import { BsYoutube } from "react-icons/bs";
import { Antonio } from "next/font/google";
import { cn } from "@/lib/utils";

const antonio = Antonio({
  subsets: ["latin"],
});

export default function YouTubeTextMark() {
  return (
    <div
      className={cn(
        "flex flex-row gap-2 items-start pointer-events-none select-none",
        antonio.className
      )}
    >
      <BsYoutube className="text-red-500 h-10 w-10" />
      <span className="text-3xl font-semibold">YouTube</span>
    </div>
  );
}
