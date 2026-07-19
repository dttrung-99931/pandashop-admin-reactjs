import { Pause, Play } from "lucide-react";
import { useRef, useState, type FC } from "react";
import { Button } from "../Buttton";

interface IAudioProps {
  src: string;
}

export const Audio: FC<IAudioProps> = ({ src }) => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // inline-block: wrap content div (effect of inline)
  // + can adjust width + height, padding, margin
  return (
    <div className="inline-block">
      <audio ref={ref} src={src}>
        Your browser does not support the audio element.
      </audio>
      <Button
        type="icon"
        onClick={() => {
          if (isPlaying) {
            ref.current?.pause();
          } else {
            ref.current?.play();
          }
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </Button>
    </div>
  );
};
