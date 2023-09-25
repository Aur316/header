import React, { CSSProperties } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

export type CartItemProps = {
  id: string;
  quantity: number;
  name: string;
  price: number;
  img: string;
};

const cartItemStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  margin: "0.8rem",
};

const imageStyle: CSSProperties = {
  width: "125px",
  height: "75px",
  objectFit: "cover",
  gap: "0.5rem",
};

const buttonStyle: CSSProperties = {
  background: "red",
  color: "white",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
  gap: "0.5rem",
};

export function CartItem({ id, quantity, name, price, img }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  if (!name || price === undefined || !img) return null;

  return (
    <div style={cartItemStyle}>
      <img src={img} alt={name} style={imageStyle} />
      <div style={{ flex: "1" }}>
        <div>
          {name}{" "}
          {quantity > 1 && (
            <span style={{ fontSize: ".65rem", color: "gray" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div style={{ fontSize: ".75rem", color: "gray" }}>{price}</div>
      </div>
      <div>{price * quantity}</div>
      <button style={buttonStyle} onClick={() => removeFromCart(id)}>
        &times;
      </button>
    </div>
  );
}
