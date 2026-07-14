import type { LoginResponseData } from "@features/auth/login/types/response.dto";

const STORAGE_KEYS = {
  SAVED_LOGIN: "SAVED_LOGIN",
} as const;

export const storageService = {
  getLogin: (): LoginResponseData | null => {
    const jsonStr = localStorage.getItem(STORAGE_KEYS.SAVED_LOGIN);
    if (!jsonStr) {
      return null;
    }
    return JSON.parse(jsonStr);
  },
  saveLogin: (auth: LoginResponseData | null) => {
    if (auth) {
      localStorage.setItem(STORAGE_KEYS.SAVED_LOGIN, JSON.stringify(auth));
    } else {
      localStorage.removeItem(STORAGE_KEYS.SAVED_LOGIN);
    }
  },
};
