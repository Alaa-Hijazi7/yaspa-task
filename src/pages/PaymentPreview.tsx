import { MerchantHeader } from "@/components/merchant-header";
import { usePayment } from "@/contexts/payment-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function PreviewPage() {
  const navigate = useNavigate();
  const { paymentSession, selectedBank } = usePayment();
  const [isSlowBankDrawerOpen, setIsSlowBankDrawerOpen] = useState(false);

  useEffect(() => {
    if (!selectedBank) {
      navigate("/");
    } else if (!selectedBank.fastBank) {
      // Show drawer for slow banks
      setIsSlowBankDrawerOpen(true);
    }
  }, [selectedBank, navigate]);

  const handleCloseDrawer = () => {
    setIsSlowBankDrawerOpen(false);
  };

  if (!selectedBank) return null;
  const bankIconUrl = `https://test-static.yaspa.com/banks/logos/${selectedBank.iconName}`;

  return (
    <>
      <MerchantHeader />

      <div className="flex-1 px-4 py-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Review payment
        </h1>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Payment to
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={paymentSession.logo}
                alt={paymentSession.merchantName}
                className="object-cover"
              />
            </div>
            <span className="font-medium text-gray-900">
              {paymentSession.merchantName}
            </span>
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Amount</span>
              <span className="font-semibold text-gray-900">
                {paymentSession.amount} {paymentSession.currency}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Reference</span>
              <span className="font-medium text-gray-900">
                {paymentSession.reference}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pay with</h2>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <img
                  src={bankIconUrl || "/placeholder.svg"}
                  alt={selectedBank.bankName}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-gray-900">
                {selectedBank.bankName}
              </span>
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              Change
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            We'll redirect you here to approve the payment
          </p>
        </div>

        <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors">
          Confirm and continue
        </button>
      </div>

      <Drawer open={isSlowBankDrawerOpen} onOpenChange={setIsSlowBankDrawerOpen}>
        <DrawerContent className="max-w-md mx-auto">
          <DrawerHeader className="relative">
            <DrawerClose asChild>
              <button
                onClick={handleCloseDrawer}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                aria-label="Close"
              >
                <img
                  src="/close icon.png"
                  alt="Close"
                  className="h-4 w-4"
                />
              </button>
            </DrawerClose>
            <DrawerTitle className="text-xl font-bold">
              Slow Bank Notice
            </DrawerTitle>
            <DrawerDescription className="text-base text-gray-600 mt-2">
              The bank you selected may take longer to process your payment.
              Please be patient during the authorization process.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-6">
            <Button
              onClick={handleCloseDrawer}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl"
            >
              Ok
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
