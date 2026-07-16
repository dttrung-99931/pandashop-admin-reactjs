import type { FC } from "react";
import { Center } from "../Containers/Center";
interface ITextAvatarProps {
  name: string;
}

export const TextAvatar: FC<ITextAvatarProps> = ({ name }) => {
  return (
    <div className="rounded-full size-9 bg-primary text-xs text-white cursor-pointer">
      <Center>
        <span>{name}</span>
      </Center>
    </div>
  );
};
