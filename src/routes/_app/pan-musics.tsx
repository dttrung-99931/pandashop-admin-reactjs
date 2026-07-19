import { PanMusicsPage } from "@features/pan-musics/pages/PanMusicsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/pan-musics")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PanMusicsPage></PanMusicsPage>;
}

export const PanMusicsRoute = Route;
