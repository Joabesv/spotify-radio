import fs from 'fs';
import fsPromises from 'fs/promises';
import { join, extname } from 'path';

import config from './config.js';

const {
  dir: { publicDirectory },
} = config;

export function Service() {
  function createFileStream(filename) {
    return fs.createReadStream(filename);
  }

  async function getFileInfo(file) {
    // file = home/index.html
    const fullFilePath = join(publicDirectory, file);
    // valida se existe, se não retorna erro
    await fsPromises.access(fullFilePath);
    const fileType = extname(fullFilePath);
    return {
      type: fileType,
      name: fullFilePath,
    };
  }

  async function getFileStream(file) {
    const { name, type } = await getFileInfo(file);
    return {
      stream: createFileStream(name),
      type,
    };
  }

  return {
    createFileStream: createFileStream,
    getFileInfo: getFileInfo,
    getFileStream: getFileStream,
  };
}
