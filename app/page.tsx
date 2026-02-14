import DownloadButton from '@/components/download-button';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import { TextAnimate } from '@/components/ui/text-animate';

const page = () => {
  return (
    <main className="h-[calc(100vh-40px)] flex items-center justify-center">
      <div className="w-full max-w-lg px-6 md:max-w-3xl md:px-0 mx-auto h-full flex flex-col items-center justify-center gap-8 xl:gap-4">
        <div className="space-y-4 md:space-y-2">
          <h1 className="font-instrument-serif text-5xl text-center text-white">VidArchive</h1>
          <TextAnimate
            animation="blurInUp"
            by="word"
            once
            className="text-white text-sm md:text-lg text-center max-w-prose md:max-w-4xl mx-auto"
          >
            A desktop utility application for downloading and managing media
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="word"
            once
            className="text-white/80 text-xs text-center max-w-prose md:max-w-3xl mx-auto"
          >
            (Built on top of yt-dlp and FFmpeg)
          </TextAnimate>
        </div>
        <div>
          <HeroVideoDialog
            className="z-20 outline-1 w-160 rounded-md"
            animationStyle="from-center"
            videoSrc={process.env.NEXT_PUBLIC_DEMO_VIDEO_URL!}
            thumbnailSrc={process.env.NEXT_PUBLIC_DEMO_VIDEO_THUMBNAIL_URL!}
            thumbnailAlt="VidArchive Demo Video"
          />
        </div>
        <div className="space-y-2">
          <DownloadButton />
        </div>
      </div>
    </main>
  );
};
export default page;
