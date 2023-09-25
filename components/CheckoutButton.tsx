import { useState } from "react";
import { Button, message, Alert } from "antd";
import { useRouter } from "next/router";
import handlePurchaseHook from "../hooks/handlePurchase";

interface CheckoutButtonProps {
  cart: any;
}

function CheckoutButton({ cart }: CheckoutButtonProps) {
  const [invoiceData, setInvoiceData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize the useRouter hook

  const createInvoice = async () => {
    try {
      await handlePurchaseHook(cart);

      const response = await fetch("/api/createInvoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item: any) => ({
            _id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }

      const data = await response.json();
      setInvoiceData(data);
      window.open(data.checkoutLink, "btcpay_checkout", "width=900,height=900");
      router.push("/shop/disclaimer"); // Navigate to success page
    } catch (error) {
      setError((error as Error).message);
      message.error((error as Error).message);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={createInvoice}>
        Checkout with BTCPay
      </Button>
      {error && (
        <Alert message="Error" description={error} type="error" showIcon />
      )}
    </div>
  );
}

export default CheckoutButton;
