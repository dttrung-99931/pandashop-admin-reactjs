import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import * as React from "react";
import type { AuthUserDto } from "../shared/dtos/auth_user.dto";

export type AppRouteContext = {
  user: AuthUserDto | null;
};

export const Route = createRootRouteWithContext<AppRouteContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    // React.Fragment like <></>
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
