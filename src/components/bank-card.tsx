import type { Bank } from "@/lib/PaymentSession";
import { Button } from "@/components/ui/button";
import { usePayment } from "@/contexts/payment-context";
import { useNavigate } from "react-router-dom";

interface BankCardProps {
  bank: Bank;
  style: React.CSSProperties;
}

export function BankCard({ bank, style }: BankCardProps) {
  const iconUrl = `https://test-static.yaspa.com/banks/logos/${bank.iconName}`;
  const { setSelectedBank } = usePayment();
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      onClick={() => {
        setSelectedBank(bank);
        navigate("/preview");
      }}
      className="relative flex flex-col items-center justify-center p-4 h-auto rounded-xl border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all"
      style={style}
    >
      {bank.fastBank && (
        <div className="absolute top-2 right-2">
          <img
            src="/lightning-icon.svg"
            alt="Fast bank"
            width={14}
            height={14}
          />
        </div>
      )}
      <img
        src={iconUrl || "/placeholder.svg"}
        alt={bank.bankName}
        className="object-contain max-h-14"
      />
      <span className="text-sm font-medium text-gray-900 text-center">
        {bank.bankName}
      </span>
    </Button>
  );
}
