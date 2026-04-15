'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { Info } from 'lucide-react'
import { getAllDownloadUrls } from '@/app/download'

const DownloadButton = () => {
  const [os, setOs] = useState<'win' | 'linux' | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const downloadRef = useRef<HTMLAnchorElement | null>(null)
  const [exeUrl, setExeUrl] = useState<string | undefined>('')
  const [appImageUrl, setAppImageUrl] = useState<string | undefined>('')
  const [debUrl, setDebUrl] = useState<string | undefined>('')

  useEffect(() => {
    const ua = navigator.userAgent
    const isWin = ua.includes('Windows') || ua.includes('Win32') || ua.includes('Win64')
    const isLinux = ua.includes('Linux') && !ua.includes('Android')

    if (isWin) setOs('win')
    else if (isLinux) setOs('linux')

    getAllDownloadUrls().then((urls) => {
      setExeUrl(urls.winExe)
      setDebUrl(urls.linuxDeb)
      setAppImageUrl(urls.linuxAppImage)
      setIsLoaded(true)
    })
  }, [])

  const handleDownload = () => {
    if (downloadRef.current) {
      downloadRef.current.click()
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-2 group">
        <Button
          className="h-[50px] z-10 flex items-center gap-2 bg-white hover:bg-white/80 text-black"
          disabled={!isLoaded}
          onClick={handleDownload}
        >
          {os === 'win' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-brand-windows size-6"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407zm-10 0v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6zm0 -9.158v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87zm10 2.058v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-debian size-6"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17c-2.397 -.943 -4 -3.153 -4 -5.635c0 -2.19 1.039 -3.14 1.604 -3.595c2.646 -2.133 6.396 -.27 6.396 3.23c0 2.5 -2.905 2.121 -3.5 1.5c-.595 -.621 -1 -1.5 -.5 -2.5" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
          )}
          Download {os === 'win' ? '.exe (x64)' : '.deb (amd64)'}
        </Button>
        {os === 'win' && (
          <p className="text-[10px] bg-amber-300/20 p-2 rounded-md outline-1 outline-amber-300 text-amber-300 text-center flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Info className="inline-block size-4" /> This app is not code-signed yet, so Windows may
            show a SmartScreen warning on first launch. The app is completely safe to use.
          </p>
        )}
        {os === 'linux' && (
          <a href={appImageUrl} className="underline">
            Download .AppImage (amd64)
          </a>
        )}
      </div>

      <a href={os === 'win' ? exeUrl : debUrl} className="hidden" ref={downloadRef} download></a>
    </>
  )
}

export default DownloadButton
