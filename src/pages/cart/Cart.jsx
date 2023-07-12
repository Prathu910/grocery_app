import React from "react";
import "./Cart.scss";
import img from "../../assets/products/image1.png";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="cart-page container">
      <div className="items-in-cart">
        <h2>Items in your cart</h2>
        <div className="item-titles">
          <p className="first">Product Name</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="item">
          <div className="item-info first">
            <img src={img} alt="" />
            <div className="cat">
              <p>Beverages</p>
              <p>Nescafe Coffee</p>
            </div>
          </div>
          <p className="price">$ 4.50</p>
          <button className="counter">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </button>
          <p className="total">$ 9.50</p>
          <p className="remove">
            <BsTrash />
          </p>
        </div>
        <div className="item">
          <div className="item-info first">
            <img src={img} alt="" />
            <div className="cat">
              <p>Beverages</p>
              <p>Nescafe Coffee</p>
            </div>
          </div>
          <p className="price">$ 4.50</p>
          <button className="counter">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </button>
          <p className="total">$ 9.50</p>
          <p className="remove">
            <BsTrash />
          </p>
        </div>
        <div className="item">
          <div className="item-info first">
            <img src={img} alt="" />
            <div className="cat">
              <p>Beverages</p>
              <p>Nescafe Coffee</p>
            </div>
          </div>
          <p className="price">$ 4.50</p>
          <button className="counter">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </button>
          <p className="total">$ 9.50</p>
          <p className="remove">
            <BsTrash />
          </p>
        </div>
      </div>
      <div className="order-info">
        <div className="customer-detail">
          <div className="title">Customer Detail</div>
          <p>John Doe</p>
          <p>+91 7600915742</p>
        </div>
        <div className="billing-detail">
          <div className="title">Billing Detail</div>
          <div className="bill">
            <p className="cat-bill">Sub Total: </p>
            <p>$ 45.10</p>
          </div>
          <div className="bill">
            <p className="cat-bill">Discount: </p>
            <p>$ 10.00</p>
          </div>
          <div className="bill">
            <p className="cat-bill">Shipping: </p>
            <p>$ 5.10</p>
          </div>
          <div className="input-promo">
            <input type="text" />
            <button>Apply</button>
          </div>
          <div className="total">
            <p>Total: </p>
            <p>$ 40.00</p>
          </div>
          <div className="checkout">
            <button className="btn" onClick={() => navigate("/checkout")}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
