import { cn } from "@utils/cn";
import type { BaseTableItemType, TableColumn } from ".";

type TableHeaderProps<T extends BaseTableItemType> = {
  columns: TableColumn<T>[];
};

export function TableHeader<T extends BaseTableItemType>({
  columns,
}: TableHeaderProps<T>) {
  return (
    <thead>
      <tr className="flex bg-gray-100">
        {columns.map((col) => (
          <th
            id={col.title}
            className={cn("px-4 py-2")}
            style={{
              flex: col.flex ?? 1,
            }}
          >
            {col.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
