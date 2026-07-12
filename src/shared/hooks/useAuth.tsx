import {
  createContext,
  useCallback,
  useState,
  type ReactNode,
  useContext,
} from "react";
import type { AuthUserDto } from "../dtos/auth_user.dto";
import { UncatchException } from "../exceptions/exception";

interface AuthContext {
  user: AuthUserDto | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContext>({
  user: null,
  logout: () => {},
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUserDto | null>();
  const logout = useCallback(() => {}, []);
  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContext {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new UncatchException("Missing AuthProvider");
  }
  return authContext;
}

export { AuthProvider, AuthContext, useAuth };
