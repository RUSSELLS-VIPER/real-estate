import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

const FILE_TYPE_MAP: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/webp": "webp",
};

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  if (FILE_TYPE_MAP[file.mimetype]) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed") as any, false);
  }
};

export const uploadCheck = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter,
});