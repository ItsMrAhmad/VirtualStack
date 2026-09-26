export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // Map /images/<name>.jpg to /images/opt/<name>-<width>.webp
  const match = src.match(/^\/?images\/([^/]+)\.(jpg|jpeg)$/i);
  if (match) {
    const baseName = match[1];
    const targetWidth = width <= 640 ? 640 : width <= 1080 ? 1080 : 1920;
    return `/images/opt/${baseName}-${targetWidth}.webp`;
  }

  // Any other src (logos, /icon.png, /og-image.jpg) passes through unchanged
  return src;
}
