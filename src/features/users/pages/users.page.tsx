import { Page } from "@shared/components/Page";
import type { FC } from "react";
interface IUsersPageProps {}

export const UsersPage: FC<IUsersPageProps> = () => {
  return (
    <Page>
      <Page.Header title="Users management"></Page.Header>
      <Page.Content>Users</Page.Content>
    </Page>
  );
};
