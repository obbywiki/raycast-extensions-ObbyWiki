import { open } from "@raycast/api";
import { get_page_url } from "./wiki_urls";

export default async function Command() {
  await open(get_page_url("Special:Random", false));
}

