import z from "zod";

export const panMusicScheme = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Name is required"),
  durationInSecs: z.number().optional(),
  music: z.file({
    error: "Please select music file",
  }),
});

export type PanMusicScheme = z.infer<typeof panMusicScheme>;

export type PanMusicRequest = {
  id?: number;
  title: string;
  music: File;
  durationInSecs: number;
};
