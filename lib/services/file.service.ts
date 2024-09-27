export const getFileLink = (key: string): string => {
  if (!key || key === "") return "/placeholder.jpg";

  return new URL(key, process.env.NEXT_PUBLIC_IMAGE_BASE_URL).href;
};
