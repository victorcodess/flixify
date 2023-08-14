export default function convertPath(inputPath: string): string {
  const newPath = inputPath.replace(
    "./assets",
    "https://raw.githubusercontent.com/victorcodess/flixify/main/public/assets"
  );
  return newPath;
}
