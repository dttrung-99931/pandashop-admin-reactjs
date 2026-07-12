const ERROR_CODES = {
  UNKNOWN: "UNKNOWN",
} as const;

type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

class AppException extends Error {
  constructor(
    private errorCode?: ErrorCode,
    message?: string,
  ) {
    super(message);
    this.name = "AppException";
    this.errorCode = errorCode;
  }
}

class UncatchException extends AppException {
  constructor(message: string = "Uncatch exception") {
    super("UNKNOWN", message);
  }
}

export { ERROR_CODES, AppException, UncatchException };
