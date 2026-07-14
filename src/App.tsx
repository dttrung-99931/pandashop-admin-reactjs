import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./shared/hooks/useAuth";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterApp />
      </QueryClientProvider>
      <ToastContainer />
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
  const { auth: user } = useAuth();
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
