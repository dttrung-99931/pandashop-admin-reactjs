import z from "zod";

export function panMusicScheme(isEdit: boolean) {
  const schema = z.object({
    id: z.number().optional(),
    title: z.string().min(1, "Name is required"),
    durationInSecs: z.number().optional(),
    music: z.file().optional(),
  });

  return schema.superRefine((value, ctx) => {
    if (isEdit && !value.id) {
      ctx.addIssue({
        message: "Missing id when update",
        code: "custom",
        path: ["id"],
      });
    }

    if (!isEdit && !value.music) {
      ctx.addIssue({
        message: "Please select music file",
        code: "custom",
        path: ["music"],
      });
    }
  });
}

export type PanMusicForm = z.infer<ReturnType<typeof panMusicScheme>>;

export type CreatePanMusicRequest = {
  title: string;
  music: File;
  durationInSecs: number;
};

export type UpdatePanMusicRequest = {
  id: number;
  title: string;
  music?: File;
  durationInSecs: number;
};
