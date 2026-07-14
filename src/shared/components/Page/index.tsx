import { PageRoot } from "./Page";
import { PageContent } from "./PageContent";
import { PageHeader } from "./PageHeader";

export const Page = Object.assign(PageRoot, {
  Header: PageHeader,
  Content: PageContent,
});
