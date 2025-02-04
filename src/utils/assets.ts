import { AudioItem, IconItem, ImageItem, VideoData } from "@/types/types";

import path from "path";
import sizeOf from "image-size";
import { ISize, ISizeCalculationResult } from "image-size/dist/types/interface";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "svg"];
const AUDIO_EXTENSIONS = ["mp3", "wav", "ogg"];
const VIDEO_EXTENSIONS = ["mp4", "webm", "ogg"];
const ICON_EXTENSIONS = ["ico", "svg", "webp", "png"];


const getFileExtension = (filename: string): string | null => {
  return filename.includes(".") ? filename.split(".").pop()?.toLowerCase() || null : null;
};

export const getAssets = (folderPath: string) => {
  const filename = folderPath.split("/").pop();
  const fileExtension = folderPath.split(".").pop();
  let dimensions: ISizeCalculationResult | ISize | { width: number, height: number } = { width: 0, height: 0 };
  try {
    dimensions = sizeOf(folderPath) || { width: 0, height: 0 };
  } catch (error) {
    console.error(`Error getting dimensions for file: ${folderPath}`, error);
  }

  const getIconMetadata = (filePath: string) => ({
    url: filePath,
    alt: filePath,
    type: `image/${fileExtension}`,
    width: dimensions.width,
    height: dimensions.height,  
    size: `${dimensions.width}x${dimensions.height}`  
  });


  const getImageMetadata = (filePath: string) => ({
    url: filePath,
    width: dimensions.width,
    height: dimensions.height,
    alt: filePath,
    type: `image/${fileExtension}`
  });

  const getAudioMetadata = (filePath: string) => ({
    url: filePath,
    alt: filePath, 
    type: `audio/${fileExtension}`
  });

  const getVideoMetadata = (filePath: string) => ({
    url: filePath,
    alt: filePath,
    width: dimensions.width,
    height: dimensions.height,
    type: `video/${fileExtension}`
  });


  const assets: {
    images: any[];
    audio: any[];
    videos: any[];
    icons: any[];
  } = {
    images: [],
    audio: [],
    videos: [],
    icons: []
  };
  // import fs from "fs";
  const fs = require("fs");

  const scanFolder = (dir: string) => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        scanFolder(filePath);
      } else {
        const extension = getFileExtension(file);
        if (IMAGE_EXTENSIONS.includes(extension || "")) {
          assets.images.push(getImageMetadata(filePath));
        } else if (AUDIO_EXTENSIONS.includes(extension || "")) {
          assets.audio.push(getAudioMetadata(filePath));
        } else if (VIDEO_EXTENSIONS.includes(extension || "")) {
          assets.videos.push(getVideoMetadata(filePath));
        } else if (ICON_EXTENSIONS.includes(extension || "")) {
          assets.icons.push(getIconMetadata(filePath)); 
        }
      }
    });
  };

  scanFolder(folderPath);

  return assets;
};
