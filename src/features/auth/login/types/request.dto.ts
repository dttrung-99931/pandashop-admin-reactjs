import z from "zod";

const loginScheme = z.object({
  username: z.string().min(1, "Please input username"),
  password: z.string().min(1, "Please input password"),
});

type LoginRequest = z.infer<typeof loginScheme>;

export { loginScheme, type LoginRequest };
