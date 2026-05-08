import { open } from "@raycast/api";
import { get_special_url } from "./wiki_urls";

export default async function Command() {
  await open(get_special_url("Special:RandomInCategory/Obby"));
}

