import { toast } from "react-toastify";

type JDXToastType = "default" | "success" | "error" | "warning";

export type JDXToastOptions = {
  type: JDXToastType;
  autoCloseSecs: number;
};

function showToast(
  message: string,
  options: JDXToastOptions = {
    type: "success",
    autoCloseSecs: 3,
  },
) {
  toast(message, {
    type: options.type,
    autoClose: options.autoCloseSecs * 1000,
    hideProgressBar: true,
  });
}

export function showMessageToast(message: string, autoCloseSecs: number = 3) {
  showToast(message, { type: "success", autoCloseSecs });
}

export function showErrorToast(message: string, autoCloseSecs: number = 3) {
  showToast(message, { type: "error", autoCloseSecs });
}

export function showWarningToast(message: string, autoCloseSecs: number = 3) {
  showToast(message, { type: "warning", autoCloseSecs });
}
