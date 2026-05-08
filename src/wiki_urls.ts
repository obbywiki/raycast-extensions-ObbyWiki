export const wiki_base_url = 'https://obbywiki.com';

export function get_page_url(page_title: string, encode: boolean = true): string {
  const normalized_title = page_title.trim().replaceAll(' ', '_');
  if (!normalized_title) return `${wiki_base_url}/wiki/Main_Page`;
  return `${wiki_base_url}/wiki/${encode ? encodeURIComponent(normalized_title) : normalized_title}`;
}
