import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import * as React from "react";
import type { LoginResponseData } from "../features/auth/login/types/response.dto";

export type AppRouteContext = {
  user: LoginResponseData | null;
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
