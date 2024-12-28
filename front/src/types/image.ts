export interface IImage {
  id: number; // Unique identifier for the image
  documentId: string; // Unique document ID
  name: string; // Name of the image file
  alternativeText: string | null; // Alternative text for accessibility
  caption: string | null; // Caption for the image
  width: number; // Original image width in pixels
  height: number; // Original image height in pixels
  formats: {
    thumbnail?: ImageFormat; // Thumbnail format details
    small?: ImageFormat; // Small format details
    medium?: ImageFormat; // Medium format details
  }; // Different image sizes
  hash: string; // Unique hash for the image
  ext: string; // File extension (e.g., .png)
  mime: string; // MIME type of the image
  size: number; // File size in KB
  url: string; // Path to the image file
  previewUrl: string | null; // URL for a preview of the image, if available
  provider: string; // Storage provider (e.g., local)
  provider_metadata: any | null; // Metadata specific to the provider
  createdAt: string; // Timestamp of image creation
  updatedAt: string; // Timestamp of the last update
  publishedAt: string; // Timestamp when the image was published
}

interface ImageFormat {
  name: string; // Name of the formatted image
  hash: string; // Hash of the formatted image
  ext: string; // File extension of the formatted image
  mime: string; // MIME type of the formatted image
  path: string | null; // Path to the formatted image
  width: number; // Width of the formatted image in pixels
  height: number; // Height of the formatted image in pixels
  size: number; // File size in KB
  sizeInBytes: number; // File size in bytes
  url: string; // URL for the formatted image
}