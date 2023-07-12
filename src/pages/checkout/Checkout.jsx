import React from "react";
import "./Checkout.scss";
import phonepe from "../../assets/payment/phonepe.png";
import paypal from "../../assets/payment/paypal.png";
import googlepay from "../../assets/payment/googlepay.png";
import mastercard from "../../assets/payment/mastercard.png";
import prod1 from "../../assets/products/image1.png";
import prod2 from "../../assets/products/image2.png";

const Checkout = () => {
  return (
    <div className="checkout-page container">
      <div className="order-details">
        <div className="address">
          <div className="title">
            <h1>Select Address</h1>
          </div>
          <div className="user-card">
            <div className="user">
              <input type="radio" name="user-info" />
              <div className="user-info">
                <p className="name">Sean Smith</p>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </div>
            <div className="user">
              <input type="radio" name="user-info" />
              <div className="user-info">
                <p className="name">Sean Smith</p>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </div>
          </div>
          <div className="new-add-btn">
            <button className="btn">Add new address</button>
          </div>
        </div>
        <div className="payment">
          <div className="title">
            <h1>Payment Method</h1>
          </div>
          <div className="methods">
            <div className="method">
              <input type="radio" name="method" />
              <div className="info">
                <img src={paypal} alt="" />
                <p>Paypal</p>
              </div>
            </div>
            <div className="method">
              <input type="radio" name="method" />
              <div className="info">
                <img src={googlepay} alt="" />
                <p>Google Pay</p>
              </div>
            </div>
            <div className="method">
              <input type="radio" name="method" />
              <div className="info">
                <img src={phonepe} alt="" />
                <p>Phone Pay</p>
              </div>
            </div>
            <div className="method">
              <input type="radio" name="method" />
              <div className="info">
                <img src={mastercard} alt="" />
                <p>Credit/Master Card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="place-order">
        <div className="title">
          <h1>Items</h1>
        </div>
        <div className="products">
          <div className="product">
            <img src={prod1} alt="" />
            <div className="prod-info">
              <p>Beverages</p>
              <p>Nescafe Coffee</p>
            </div>
            <div className="price">$ 4.50</div>
          </div>
          <div className="product">
            <img src={prod2} alt="" />
            <div className="prod-info">
              <p>Beverages</p>
              <p>Nescafe Coffee</p>
            </div>
            <div className="price">$ 4.50</div>
          </div>
        </div>
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
        <div className="bill">
          <p className="cat-bill">Tax: </p>
          <p>$ 5.10</p>
        </div>
        <div className="total">
          <p>Total: </p>
          <p>$ 40.00</p>
        </div>
        <div className="place-0rder-btn">
          <button className="btn" onClick={() => navigate("/checkout")}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
