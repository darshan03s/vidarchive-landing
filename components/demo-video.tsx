'use client'

import { useState } from 'react'
import DemoVideoDialog from './demo-video-dialog'
import { Button } from './ui/button'
import { FilePlay } from 'lucide-react'

const DemoVideo = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-center">
      <Button variant={'outline'} className="text-xs" onClick={() => setOpen(true)}>
        <FilePlay />
        See demo
      </Button>
      <DemoVideoDialog
        isVideoOpen={open}
        setIsVideoOpen={setOpen}
        videoSrc={process.env.NEXT_PUBLIC_DEMO_VIDEO_URL!}
      />
    </div>
  )
}

export default DemoVideo
