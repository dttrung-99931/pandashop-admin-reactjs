import type { ReactNode } from "react";
import { TableHeader } from "./TableHeader";
import { TableRows } from "./TableRows";

export type BaseTableItemType = Record<string, unknown>;

export type TableColumn<T extends BaseTableItemType> = {
  title: string;
  renderCell: (data: T) => ReactNode;
  className?: string;
  flex?: number;
  onClick?: (item: T) => void;
};

interface ITableProps<T extends BaseTableItemType> {
  data: T[];
  columns: TableColumn<T>[];
  onClick?: (item: T) => void;
}

export function Table<T extends BaseTableItemType>({
  columns,
  data,
  onClick,
}: ITableProps<T>) {
  return (
    <table className="p-4 w-full">
      <TableHeader columns={columns} />
      <TableRows columns={columns} data={data} onClick={onClick} />
    </table>
  );
}
