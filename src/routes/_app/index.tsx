import { createFileRoute, redirect } from "@tanstack/react-router";

/// Set default route = '/home' by redirect
export const Route = createFileRoute("/_app/")({
  beforeLoad: () => {
    throw redirect({ to: "/home" });
  },
});
