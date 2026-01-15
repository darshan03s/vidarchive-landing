import { GeistFontData, InstrumentSerifFontData } from '@/data';
import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        background: 'radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)',
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
          fontSize: 30,
          fontWeight: 'normal',
          color: 'white'
        }}
      >
        A Windows desktop application for downloading media.
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
  );
}
