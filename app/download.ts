type GitHubAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  assets: GitHubAsset[];
};

type DownloadUrls = {
  winExe?: string;
  linuxDeb?: string;
  linuxAppImage?: string;
};

export async function getAllDownloadUrls(): Promise<DownloadUrls> {
  const res = await fetch(process.env.NEXT_PUBLIC_GITHUB_API_URL!, { cache: 'no-store' });
  if (!res.ok) return {};

  const data = (await res.json()) as GitHubRelease;

  return {
    winExe: data.assets.find((a) => a.name.endsWith('-x64-setup.exe'))?.browser_download_url,
    linuxDeb: data.assets.find((a) => a.name.endsWith('.deb'))?.browser_download_url,
    linuxAppImage: data.assets.find((a) => a.name.endsWith('.AppImage'))?.browser_download_url
  };
}
