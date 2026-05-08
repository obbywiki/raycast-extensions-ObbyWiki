import { Action, ActionPanel, Form, open, showToast, Toast } from "@raycast/api";
import { get_page_url, get_special_url } from "./wiki_urls";

type Values = {
  page_title: string;
};

function coerce_to_url(value: string): string {
  const trimmed = value.trim();
  
  if (!trimmed) return get_page_url("Main_Page");
  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  return get_page_url(trimmed);
}

export default function Command() {
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Open Page" onSubmit={handle_submit} />
          <Action.OpenInBrowser title="Random Page" url={get_special_url('Special:Random')} />
          <Action.OpenInBrowser title="Random Obby" url={get_special_url('Special:RandomInCategory/Obby')} />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="page_title"
        title="Page Title"
        placeholder="e.g. Tower of Hell"
        autoFocus
        info="Enter a page title (or paste a full URL)."
      />
    </Form>
  );

  async function handle_submit(values: Values) {
    const url = coerce_to_url(values.page_title);
    await open(url);
    await showToast({ style: Toast.Style.Success, title: 'Opened', message: url });
  }
}

