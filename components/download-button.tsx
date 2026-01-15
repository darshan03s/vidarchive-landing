'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

const DownloadButton = () => {
  const [isWindows, setIsWindows] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const isWin = ua.includes('Windows') || ua.includes('Win32') || ua.includes('Win64');

    setIsWindows(isWin);
    setIsLoaded(true);
  }, []);

  const handleDownload = () => {
    if (isWindows && downloadRef.current) {
      downloadRef.current.click();
    } else {
      alert('Only available for Windows');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <Button
          className="w-[200px] h-[50px] z-10 flex items-center gap-2 bg-white hover:bg-white/80 text-black"
          disabled={!isWindows || !isLoaded}
          onClick={handleDownload}
        >
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
          Download (Latest)
        </Button>
      </div>

      <a
        href={process.env.NEXT_PUBLIC_DOWNLOAD_URL}
        className="hidden"
        ref={downloadRef}
        download
      ></a>
    </>
  );
};

export default DownloadButton;
