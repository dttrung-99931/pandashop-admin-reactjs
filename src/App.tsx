import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./shared/hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <RouterApp></RouterApp>
    </AuthProvider>
  );
}

// Tanstack router config
export const router = createRouter({
  routeTree: routeTree,
  context: {
    user: null,
  },
});

function RouterApp() {
  const { user } = useAuth();
  return (
    <RouterProvider
      context={{
        user,
      }}
      router={router}
    />
  );
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
export default App;
