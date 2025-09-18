'use client'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useEffect } from 'react'
import { clsx } from 'clsx'

interface Props {
  media: string;
  className?: string;
  panelStyle?: string;
  isOpenModel: boolean;
  setIsOpenModel: (isOpenModel: boolean) => void;
  isAutoplay?: boolean; 
}

export const LightBox = ({ media, className = "", isOpenModel, setIsOpenModel, isAutoplay = false }: Props) => {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpenModel(false);
      }
    };
    if (isOpenModel) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpenModel]);

  function close() {
    setIsOpenModel(false);
  }

  const getYouTubeEmbed = (url: string) => {
    let videoId = "";

    if (url.includes("youtu.be")) {
      videoId = url.split("/").pop() ?? "";
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1].split("&")[0];
    }

    if (!videoId) return url;

    return `https://www.youtube.com/embed/${videoId}?autoplay=${isAutoplay ? "1" : "0"}&rel=0&modestbranding=1`;
  };

  const isImage = /\.(jpg|jpeg|png|gif|webp)$/.test(media);
  const isYouTube = media.includes("youtube.com") || media.includes("youtu.be");

  return (
    <Dialog open={isOpenModel} as="div" className="relative z-50" onClose={close}>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <DialogPanel className={clsx("w-fit rounded-xl overflow-hidden bg-white/5 backdrop-blur-lg")}>

          {isImage ? (
            <img src={media} alt="Lightbox Preview" className={clsx("w-full h-auto rounded-lg", className)} />
          ) : isYouTube ? (
            <iframe
              className={clsx("w-fit aspect-video h-[90vh] rounded-lg", className)}
              src={getYouTubeEmbed(media)}
              title="YouTube Video"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              className={clsx("w-fit h-[90vh] rounded-lg", className)}
              src={media}
              title="Embedded Content"
              allowFullScreen
            ></iframe>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
