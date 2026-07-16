import { SideBar } from "@shared/components/Layout/SideBar";
import { TopBar } from "@shared/components/Layout/TopBar";
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
  return (
    <div className="flex h-full w-full">
      <SideBar></SideBar>
      <div className="flex-1 flex flex-col">
        <TopBar></TopBar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
