import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    if (!context.user && location.pathname !== "/login") {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function RouteComponent() {
  return <Outlet></Outlet>;
}
