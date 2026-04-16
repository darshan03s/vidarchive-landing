import { GeistFontData, InstrumentSerifFontData } from '@/data'
import { ImageResponse } from 'next/og'

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        background: '#020617',
        backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
        backgroundSize: '32px 32px, 32px 32px, 100% 100%',
        width: '100%',
        height: '100%',
        padding: '50px 200px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
      }}
    >
      <span
        style={{
          fontFamily: 'Instrument Serif',
          fontSize: 80,
          fontWeight: 'bold',
          color: 'white'
        }}
      >
        VidArchive
      </span>
      <p
        style={{
          fontFamily: 'Geist',
          fontSize: 20,
          fontWeight: 'normal',
          color: 'white'
        }}
      >
        A desktop utility application for downloading and managing media.
      </p>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Instrument Serif',
          data: InstrumentSerifFontData,
          style: 'normal'
        },
        {
          name: 'Geist',
          data: GeistFontData,
          style: 'normal'
        }
      ]
    }
  )
}
