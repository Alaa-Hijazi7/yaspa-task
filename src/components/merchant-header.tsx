import { usePayment } from "@/contexts/payment-context";

export function MerchantHeader() {
  const { paymentSession } = usePayment();

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={paymentSession.logo}
            alt={paymentSession.merchantName}
            className="object-cover"
            loading="lazy"
          />
        </div>
        <span className="font-medium text-gray-900">
          {paymentSession.merchantName}
        </span>
      </div>
      <span className="text-xl font-semibold text-gray-900">
        {paymentSession.amount} {paymentSession.currency}
      </span>
    </div>
  );
}
