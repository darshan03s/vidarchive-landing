import Background from '@/components/background'
import { buttonVariants } from '@/components/ui/button'
import icon from '@/public/icon.png'
import { IconBrandGithub } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import DownloadButtons from '@/components/download-buttons'
import DemoVideo from '@/components/demo-video'
import { TextAnimate } from '@/components/ui/text-animate'
import Features from '@/components/features'

const Page = () => {
  return (
    <Background>
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="flex flex-col gap-4 min-h-screen py-4">
          <div className="flex items-center justify-between h-10">
            <span className="flex items-center gap-2">
              <Image src={icon} alt="icon" width={30} height={30} />
              <span className="font-bold font-mono">VidArchive</span>
            </span>

            <div className="flex items-center gap-3">
              <DemoVideo />
              <span>
                <Link
                  href={process.env.NEXT_PUBLIC_GITHUB_URL!}
                  target="_blank"
                  className={buttonVariants({ size: 'icon-sm' })}
                >
                  <IconBrandGithub />
                </Link>
              </span>
            </div>
          </div>

          <div className="flex-1 my-auto flex justify-center items-center">
            <div className="space-y-12 relative bottom-10">
              <div className="space-y-4">
                <TextAnimate by="character" className="text-5xl font-bold font-mono text-center">
                  Download.Track.Manage
                </TextAnimate>
                <TextAnimate className=" text-lg font-semibold text-muted-foreground text-center font-mono leading-6">
                  A desktop media downloader with history, progress tracking, and full control.
                </TextAnimate>
              </div>

              <Features />

              <div className="flex items-center justify-center gap-4">
                <DownloadButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  )
}

export default Page
