import { useState, useRef, MouseEvent, useEffect } from "react";
import { Play } from "lucide-react";
import { Video } from "@/lib/videos";

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video on mount, muted and looping
  useEffect(() => {
    videoRef.current?.play().catch(() => {
      // Auto-play might be blocked by browser, user interaction required
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick(video);
  };

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl aspect-video bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={video.preview}
        poster={video.poster}
        className="w-full h-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform scale-100 group-hover:scale-110 transition-transform duration-300">
          <Play className="w-6 h-6 text-black ml-1" fill="black" />
        </div>
      </div>

      {/* Title Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-semibold text-lg truncate">{video.title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
