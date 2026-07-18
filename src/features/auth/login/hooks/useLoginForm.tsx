import type { AppException } from "@shared/exceptions/exception";
import { useAuth } from "@shared/hooks/useAuth";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { showErrorToast, showMessageToast } from "@utils/toast";
import { authService } from "../services/auth.service";
import { loginScheme, type LoginRequest } from "../types/request.dto";
import type { LoginResponse } from "../types/response.dto";
import { useNavigate } from "@tanstack/react-router";

export function useLoginForm() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const { isPending, error, mutateAsync } = useMutation<
    LoginResponse,
    AppException,
    LoginRequest
  >({
    mutationKey: ["login"],
    mutationFn: async (request) => {
      return authService.login(request);
    },
  });

  const form = useForm({
    validators: {
      onChange: loginScheme,
    },
    defaultValues: {
      username: "",
      password: "",
    } satisfies LoginRequest,
    onSubmit: async (f) => {
      const req: LoginRequest = f.value;
      const res: LoginResponse = await mutateAsync(req);
      if (res.success && res.data) {
        setAuth(res.data);
        showMessageToast("Login successfully!");
        navigate({
          to: "/pan-musics",
        });
      } else {
        showErrorToast("Login failed!");
      }
    },
  });

  return {
    form,
    isLoading: isPending,
    error,
  };
}
