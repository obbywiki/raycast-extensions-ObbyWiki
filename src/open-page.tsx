import { open } from "@raycast/api";
import { get_page_url } from "./wiki_urls";

export default async function Command(props: { arguments: { page_title: string } }) {
  await open(get_page_url(props.arguments.page_title, true));
}

