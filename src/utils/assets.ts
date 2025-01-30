import { AudioItem, IconItem, ImageItem, VideoData } from "@/types/types";
import fs from "fs";
import path from "path";

// Define supported file extensions for each asset type
const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "svg"];
const AUDIO_EXTENSIONS = ["mp3", "wav", "ogg"];
const VIDEO_EXTENSIONS = ["mp4", "webm", "ogg"];
const ICON_EXTENSIONS = ["ico", "svg", "webp", "png"]; // Added icon extensions


export const getAssetsFromPublicFolder = (folderPath: string) => {
  // Helper function to get the file extension
  const getFileExtension = (fileName: string) => fileName.split('.').pop()?.toLowerCase();

  // Helper function to get image metadata
  const getImageMetadata = (filePath: string): ImageItem => ({
    url: filePath,
    width: 3000, // Placeholder, ideally you could use a library to get actual image dimensions
    height: 3000, // Placeholder, same as above
    alt: filePath, // Can be changed to match your assets' naming convention
    type: `image/${getFileExtension(filePath)}`,
  });

  // Helper function to get audio metadata
  const getAudioMetadata = (filePath: string): AudioItem => ({
    url: filePath,
    alt: filePath, // Similar to the image alt
    width: 0, // No width for audio
    height: 0, // No height for audio
    type: `audio/${getFileExtension(filePath)}`,
  });

  // Helper function to get video metadata
  const getVideoMetadata = (filePath: string): VideoData => ({
    url: filePath,
    alt: filePath, // Similar to the image alt
    width: 1280, // Placeholder for video width
    height: 720, // Placeholder for video height
    type: `video/${getFileExtension(filePath)}`,
  });

  // Helper function to get icon metadata
  const getIconMetadata = (filePath: string): IconItem => ({
    url: filePath,
    alt: filePath, // Can be changed based on naming convention
    type: `image/${getFileExtension(filePath)}`, // E.g., image/x-icon, image/svg+xml
    size: "16x16", // Placeholder, can be dynamically set if needed
  });

  const assets: {
    images: ImageItem[];
    audio: AudioItem[];
    videos: VideoData[];
    icons: IconItem[]; // Added icons array
  } = {
    images: [],
    audio: [],
    videos: [],
    icons: [],
  };

  const scanFolder = (dir: string) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        scanFolder(filePath); // Recursively scan subdirectories
      } else {
        const extension = getFileExtension(file);
        if (IMAGE_EXTENSIONS.includes(extension || "")) {
          assets.images.push(getImageMetadata(filePath));
        } else if (AUDIO_EXTENSIONS.includes(extension || "")) {
          assets.audio.push(getAudioMetadata(filePath));
        } else if (VIDEO_EXTENSIONS.includes(extension || "")) {
          assets.videos.push(getVideoMetadata(filePath));
        } else if (ICON_EXTENSIONS.includes(extension || "")) {
          assets.icons.push(getIconMetadata(filePath)); // Added icon processing
        }
      }
    });
  };

  scanFolder(folderPath); // Start scanning the public folder

  return assets;
};

// Example Usage
const assets = getAssetsFromPublicFolder(path.join(__dirname, 'public'));

console.log('Images:', assets.images);
console.log('Audio:', assets.audio);
console.log('Videos:', assets.videos);
console.log('Icons:', assets.icons); // Logs the icons found
