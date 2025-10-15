import { createContext, useContext, useState, type ReactNode } from "react"
import { PaymentSession, type Bank } from "@/lib/PaymentSession"

type PaymentContextType = {
  paymentSession: typeof PaymentSession
  selectedBank: Bank | null
  setSelectedBank: (bank: Bank | null) => void
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null)

  return (
    <PaymentContext.Provider
      value={{
        paymentSession: PaymentSession,
        selectedBank,
        setSelectedBank,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePayment() {
  const context = useContext(PaymentContext)
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider")
  }
  return context
}
