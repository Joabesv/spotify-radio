import { Service } from './service.js';
const service = Service();

export function Controller() {
  const getFileStream = async filename => service.getFileStream(filename);
  return {
    getFileStream: getFileStream(),
  };
}
