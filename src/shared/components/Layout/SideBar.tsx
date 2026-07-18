import { PanMusicsRoute } from "@routes/_app/pan-musics";
import { ProductCategoriesRoute } from "@routes/_app/product-categories";
import { UserRoute } from "@routes/_app/users";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { cn } from "@utils/cn";
import type { FC } from "react";

type SideBarItemType = {
  title: string;
  route: string;
};

const SIDE_BAR_ITEMS: SideBarItemType[] = [
  {
    title: "Users",
    route: UserRoute.to,
  },
  {
    title: "Product Categories",
    route: ProductCategoriesRoute.to,
  },
  {
    title: "Pan Musics",
    route: PanMusicsRoute.to,
  },
];

export const SideBar: FC = () => {
  return (
    <div className="w-56 bg-primary flex flex-col p-4 select-none">
      <span className="text-xl text-white text-center pt-6 pb-10">
        Pandashop Admin
      </span>

      <ul className="flex flex-col gap-1">
        {SIDE_BAR_ITEMS.map((item) => (
          <SideBarItem key={item.route} item={item}></SideBarItem>
        ))}
      </ul>
    </div>
  );
};

type SideBarItemProps = {
  item: SideBarItemType;
};

const SideBarItem: FC<SideBarItemProps> = ({ item }) => {
  const pathName = useLocation({
    select: (location) => location.pathname,
  });
  const navigate = useNavigate();
  const isSelected = item.route === pathName;
  return (
    <li>
      <div
        className={cn(
          "px-6 py-1.5 cursor-pointer",
          isSelected && "bg-selected rounded-md",
        )}
        onClick={() => navigate({ to: item.route })}
      >
        <span className="text-white/90 font-medium">{item.title}</span>
      </div>
    </li>
  );
};
