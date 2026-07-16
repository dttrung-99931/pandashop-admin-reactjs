import { LoginPage } from "@features/auth/login/pages/LoginPage";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    if (context.user && location.pathname === "/login") {
      throw redirect({
        to: "/users",
      });
    }
  },
});

function RouteComponent() {
  return <LoginPage></LoginPage>;
}
