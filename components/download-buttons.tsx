'use client'

import { getAllDownloadUrls } from '@/app/download'
import { Button } from './ui/button'
import { IconBrandDebian, IconBrandWindows, IconDeviceLaptop } from '@tabler/icons-react'

const DownloadButtons = () => {
  async function handleDownload(type: 'exe' | 'deb' | 'AppImage') {
    const urls = await getAllDownloadUrls()
    if (type === 'exe') window.open(urls.winExe, '_blank')
    if (type === 'deb') window.open(urls.linuxDeb, '_blank')
    if (type === 'AppImage') window.open(urls.linuxAppImage, '_blank')
  }

  return (
    <>
      <Button onClick={() => handleDownload('exe')} className="sm:p-6">
        <IconBrandWindows /> Download .exe (x64)
      </Button>
      <Button onClick={() => handleDownload('deb')} className="sm:p-6">
        <IconBrandDebian /> Download .deb (amd64)
      </Button>
      <Button onClick={() => handleDownload('AppImage')} className="sm:p-6">
        <IconDeviceLaptop /> Download .AppImage (amd64)
      </Button>
    </>
  )
}

export default DownloadButtons
