export const URLS = {
  volkskrant:
    process.env.VOLKSKRANT_URL ??
    'https://vkgo:vkgo@www.acceptance.volkskrant.nl/',
} as const;
