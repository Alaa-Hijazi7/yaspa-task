import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { BankCard } from "./bank-card";
import type { Bank } from "@/lib/PaymentSession";

type VirtualizedBankListProps = {
  banks: Bank[];
};

export function VirtualizedBankList({ banks }: VirtualizedBankListProps) {
  const columnsPerRow = 2;
  const rowCount = Math.ceil(banks.length / columnsPerRow);

  const virtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => 216, // 200px card height + 16px margin
    overscan: 5,
  });

  const items = virtualizer.getVirtualItems();

  return (
    <div
      className="relative w-full px-4"
      style={{ height: virtualizer.getTotalSize() }}
    >
      {items.map((virtualRow) => {
        const startIndex = virtualRow.index * columnsPerRow;

        return (
          <div
            key={virtualRow.key}
            className="absolute top-0 left-0 w-full"
            style={{
              height: virtualRow.size,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <div className="grid grid-cols-2 gap-4 px-4">
              {banks[startIndex] && (
                <BankCard
                  key={banks[startIndex].key}
                  bank={banks[startIndex]}
                />
              )}
              {banks[startIndex + 1] && (
                <BankCard
                  key={banks[startIndex + 1].key}
                  bank={banks[startIndex + 1]}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
