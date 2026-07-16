import { useEffect, useRef, useState, type FC, type ReactNode } from "react";

interface IOverlayMenuProps {
  children: ReactNode;
  menu: ReactNode;
}

export const OverlayMenu: FC<IOverlayMenuProps> = ({ children, menu }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleCloseOverlay = (e: MouseEvent) => {
      if (
        isOpen &&
        divRef.current &&
        !(divRef.current as any)?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleCloseOverlay);
    } else {
      document.removeEventListener("mousedown", handleCloseOverlay);
    }
  }, [isOpen]);

  return (
    <div ref={divRef} className="select-none">
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && <div className="absolute shadow-md z-50">{menu}</div>}
    </div>
  );
};
