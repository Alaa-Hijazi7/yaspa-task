import type { Bank } from "@/lib/PaymentSession";
import { Button } from "@/components/ui/button";
import { usePayment } from "@/contexts/payment-context";
import { useNavigate } from "react-router-dom";

interface BankCardProps {
  bank: Bank;
}

export function BankCard({ bank }: BankCardProps) {
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
      className="relative flex flex-col items-center justify-center w-full p-4 h-[200px] mb-4 rounded-xl border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all"
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
        loading="lazy"
      />
      <span className="block w-full text-sm font-medium text-gray-900 text-center break-words whitespace-normal">
        {bank.bankName}
      </span>
    </Button>
  );
}
