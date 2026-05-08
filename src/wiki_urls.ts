export const wiki_base_url = 'https://obbywiki.com';

export function get_page_url(page_title: string): string {
  const normalized_title = page_title.trim().replaceAll(' ', '_');
  if (!normalized_title) return `${wiki_base_url}/wiki/Main_Page`;
  return `${wiki_base_url}/wiki/${encodeURIComponent(normalized_title)}`;
}

export function get_special_url(special_page: string): string {
  return `${wiki_base_url}/wiki/${encodeURIComponent(special_page)}`;
}

