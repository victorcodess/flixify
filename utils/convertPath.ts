export default function convertPath(inputPath: string): string {
    const newPath = inputPath.replace('./assets', '/public/assets');
    return newPath;
  }
