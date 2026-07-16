import { UsersPage } from "@features/users/pages/users.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/users")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UsersPage></UsersPage>;
}

export const UserRoute = Route;
