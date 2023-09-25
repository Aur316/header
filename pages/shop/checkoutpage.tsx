import React from "react";
import { CartItemProps, CartItem } from "../../components/CartItem";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import PaypalPage from "./paypalpage";
import Link from "next/link";
import CheckoutButton from "../../components/CheckoutButton";
import { Button } from "antd";

const cardStyle = {
  color: "white",
  border: "1px solid #ccc",
  padding: "16px",
  margin: "16px",
  borderRadius: "4px",
};

const CheckoutPage: React.FC = () => {
  const [cart, setCart] = useLocalStorage<CartItemProps[]>("shopping-cart", []);

  if (cart.length === 0) {
    return <div style={{ color: "white" }}>Your cart is empty</div>;
  }

  const totalCost = cart.reduce((sum, item) => {
    return sum + (item.price || 0) * item.quantity;
  }, 0);
  cart.forEach((item) => {
    console.log(`Item: ${item.name}, Quantity: ${item.quantity}`);
  });
  return (
    <div>
      <Link href="/shop/store">
        <Button type="default">Back to Store</Button>
      </Link>
      {cart.map((item: CartItemProps, index: number) => (
        <div style={cardStyle} key={index}>
          <CartItem
            id={item.id}
            quantity={item.quantity}
            name={item.name}
            price={item.price}
            img={item.img}
          />
        </div>
      ))}

      <div style={{ color: "white", marginBottom: "16px" }}>
        Total cost: ${totalCost.toFixed(2)}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CheckoutButton cart={cart} />
        <PaypalPage cart={cart} />
      </div>
    </div>
  );
};

export default CheckoutPage;
