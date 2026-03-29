import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Video } from "@/lib/videos";

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      videoRef.current?.play();
    } else {
      document.body.style.overflow = "";
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src={video.full}
          poster={video.poster}
          className="w-full h-auto max-h-[90vh] rounded-lg shadow-2xl object-contain"
          autoPlay
          controls
          preload="metadata"
        />

        {/* Title */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <h3 className="text-white text-xl font-semibold">{video.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
