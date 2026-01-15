import DownloadButton from '@/components/download-button';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import { TextAnimate } from '@/components/ui/text-animate';

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
        <div>
          <DownloadButton />
        </div>
      </div>
    </main>
  );
};
export default page;
