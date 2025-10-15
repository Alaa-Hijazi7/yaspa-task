import {
  List,
  WindowScroller,
  AutoSizer,
  type ListRowProps,
} from "react-virtualized";
import { BankCard } from "./bank-card";
import type { Bank } from "@/lib/PaymentSession";
import "react-virtualized/styles.css";

type VirtualizedBankListProps = {
  banks: Bank[];
};

export function VirtualizedBankList({ banks }: VirtualizedBankListProps) {
  return (
    <WindowScroller>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              autoHeight
              width={width}
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              rowCount={banks.length}
              rowHeight={216}
              className="px-4"
              rowRenderer={({ index, key, style }: ListRowProps) => (
                <BankCard
                  key={key}
                  bank={banks[index]}
                  style={{
                    ...style,
                    height: 200,
                    marginBottom: 16,
                  }}
                />
              )}
            />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
}
