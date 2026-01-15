import DownloadButton from '@/components/download-button';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import { TextAnimate } from '@/components/ui/text-animate';
import { Info } from 'lucide-react';

const page = () => {
  return (
    <main className="h-[calc(100vh-40px)] flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto h-full flex flex-col items-center justify-center gap-4">
        <div>
          <h1 className="font-instrument-serif text-4xl text-center text-white">VidArchive</h1>
          <TextAnimate animation="blurInUp" by="character" once className="text-white">
            A desktop utility application for Windows for downloading media using yt-dlp and ffmpeg.
          </TextAnimate>
        </div>
        <div>
          <HeroVideoDialog
            className="z-10"
            animationStyle="from-center"
            videoSrc={process.env.NEXT_PUBLIC_DEMO_VIDEO_URL!}
            thumbnailSrc={process.env.NEXT_PUBLIC_DEMO_VIDEO_THUMBNAIL_URL!}
            thumbnailAlt="VidArchive Demo Video"
          />
        </div>
        <div className="space-y-2 group">
          <DownloadButton />
          <p className="text-[10px] bg-amber-300/20 p-2 rounded-md outline-1 outline-amber-300 text-amber-300 text-center flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Info className="inline-block size-4" /> This app is not code-signed yet, so Windows may
            show a SmartScreen warning on first launch. The app is completly safe to use and open
            source.
          </p>
        </div>
      </div>
    </main>
  );
};
export default page;
