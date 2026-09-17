/**
 * Resolves a Cloudinary player embed URL or direct video URL to a direct MP4 stream URL.
 *
 * Example Cloudinary Embed input:
 * https://player.cloudinary.com/embed/?cloud_name=idadrqss&public_id=erasio_Smartphone_advertisement_for_ARISE_1080p_20260915165523-upscaled-2x
 *
 * Resolved output:
 * https://res.cloudinary.com/idadrqss/video/upload/erasio_Smartphone_advertisement_for_ARISE_1080p_20260915165523-upscaled-2x.mp4
 */
export function resolveCloudinaryVideoUrl(rawUrl?: string): string {
  if (!rawUrl) return "";
  const trimmed = rawUrl.trim();

  if (trimmed.includes("player.cloudinary.com/embed/")) {
    try {
      const urlObj = new URL(trimmed);
      const cloudName = urlObj.searchParams.get("cloud_name");
      const publicId = urlObj.searchParams.get("public_id");
      if (cloudName && publicId) {
        return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto:good,f_auto/${publicId}.mp4`;
      }
    } catch {
      const cloudMatch = trimmed.match(/cloud_name=([^&]+)/);
      const idMatch = trimmed.match(/public_id=([^&]+)/);
      if (cloudMatch && idMatch) {
        return `https://res.cloudinary.com/${cloudMatch[1]}/video/upload/q_auto:good,f_auto/${idMatch[1]}.mp4`;
      }
    }
  }

  return trimmed;
}