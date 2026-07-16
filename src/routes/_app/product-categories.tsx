import { Center } from "@shared/components/Containers/Center";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/product-categories")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Center>Product categoriess</Center>;
}

export const ProductCategoriesRoute = Route;
