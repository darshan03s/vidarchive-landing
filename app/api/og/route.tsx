import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 80,
        fontWeight: 'bold',
        color: 'black',
        background: 'white',
        width: '100%',
        height: '100%',
        padding: '50px 200px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      VidArchive
    </div>,
    {
      width: 1200,
      height: 630
    }
  );
}
