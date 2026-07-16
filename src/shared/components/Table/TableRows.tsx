import { cn } from "@utils/cn";
import type { BaseTableItemType, TableColumn } from ".";

type TableRowsProps<T extends BaseTableItemType> = {
  columns: TableColumn<T>[];
  data: T[];
  getKey?: (row: T) => React.Key;
  onClick?: (item: T) => void;
};

export function TableRows<T extends BaseTableItemType>({
  columns,
  data,
  getKey,
  onClick,
}: TableRowsProps<T>) {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr
          key={getKey?.(row) ?? index}
          className="flex even:bg-gray-100/70 hover:bg-primary/10"
          onClick={() => onClick?.(row)}
        >
          {columns.map((col) => (
            <td
              key={col.title}
              className={cn("px-4 py-2 text-center", col.className)}
              style={{
                flex: col.flex ?? 1,
              }}
            >
              {col.renderCell(row)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
