import {
  createContext,
  useCallback,
  useState,
  type ReactNode,
  useContext,
} from "react";
import type { LoginResponseData } from "../../features/auth/login/types/response.dto";
import { UncatchException } from "../exceptions/exception";
import { storageService } from "@shared/services/storage.service";

interface AuthContext {
  auth: LoginResponseData | null;
  setAuth: (auth: LoginResponseData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext>({
  auth: null,
  logout: () => {},
  setAuth: () => {},
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, _setAuth] = useState<LoginResponseData | null>(
    storageService.getLogin(),
  );

  const setAuth = useCallback(
    (auth: LoginResponseData | null) => {
      _setAuth(auth);
      storageService.saveLogin(auth);
    },
    [_setAuth],
  );

  const logout = useCallback(() => {
    setAuth(null);
    storageService.saveLogin(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth: auth ?? null,
        logout: logout,
        setAuth: setAuth,
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
