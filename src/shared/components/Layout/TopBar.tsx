import type { FC } from "react";
import { TextAvatar } from "../TextAvatar";
import { OverlayMenu } from "../OverlayMenu";
interface ITopBarProps {}

export const TopBar: FC<ITopBarProps> = () => {
  return (
    <div className="h-12 w-full bg-primary/40 flex justify-end items-center px-4">
      <OverlayMenu
        menu={
          <ul className="bg-white p-4">
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        }
      >
        <TextAvatar name="TR"></TextAvatar>
      </OverlayMenu>
    </div>
  );
};
