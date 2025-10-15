import { useState, useEffect, useRef } from "react";
import { MerchantHeader } from "@/components/merchant-header";
import { VirtualizedBankList } from "@/components/virtualized-bank-list";
import type { Bank } from "@/lib/PaymentSession";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export default function BankSelectorPage() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [filteredBanks, setFilteredBanks] = useState<Bank[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const fetchBanks = async () => {
    const response = await fetch("/mock/banks.json");
    const data = await response.json();
    setBanks(data);
    setFilteredBanks(data);
  };

  useEffect(() => {
    fetchBanks();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBanks(banks);
    } else {
      const filtered = banks.filter((bank) =>
        bank.bankName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBanks(filtered);
    }
  }, [searchQuery, banks]);

  const handleTrySearching = () => {
    // there's no need for the smooth scroll behavior here because it was already added to the HTML element using scroll-behavior: smooth; in the index.css file :)
    searchInputRef.current?.focus();
  };

  return (
    <>
      <MerchantHeader />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Choose your bank
        </h1>

        <InputGroup>
          <InputGroupInput
            type="search"
            ref={searchInputRef}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <VirtualizedBankList banks={filteredBanks} />

      {filteredBanks.length > 2 && (
        <div className="px-4 py-6 text-center">
          <p className="text-gray-600">
            If your bank isn't here{" "}
            <Button
              variant="link"
              onClick={handleTrySearching}
              className="text-purple-600 hover:text-purple-700 p-0 h-auto font-medium"
            >
              try searching
            </Button>
          </p>
        </div>
      )}
    </>
  );
}
