import { useState } from "react";
import styles from "./DeliveryComponent.module.css";

function DeliveryComponent() {
  const [productName, setProductName] = useState("");
  const [instruction, setInstruction] = useState("");

  function handleProductName(event) {
    setProductName(event.target.value);
  }

  const [itemNumber, setItemNumber] = useState();
  function handleNumberChange(event) {
    setItemNumber(`x${event.target.value}`);
  }

  function handleInstruction(event) {
    setInstruction(event.target.value);
  }

  const [payment, setPayment] = useState("");
  function handlePayment(event) {
    setPayment(event.target.value);
  }

  const [shipping, setShipping] = useState("");
  function handleShippingMethod(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div className={styles["delivery-border"]}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/submit"; // Redirect to /submit
          }}
        >
          <input
            className={styles["input"]}
            placeholder="Enter a value here"
            value={productName}
            onChange={(e) => handleProductName(e)}
            required
          ></input>
          <br />
          <p className={styles["paragraph"]}>
            Ordered Item:{" "}
            <span>
              {productName} {productName && itemNumber}
            </span>
          </p>
          <br />
          <input
            className={styles["input"]}
            type="number"
            placeholder="1"
            onChange={handleNumberChange}
            required
          ></input>
          <br />
          <textarea
            className={styles["comment-instructions"]}
            placeholder="Your delivery instructions"
            value={instruction}
            onChange={(e) => handleInstruction(e)}
          ></textarea>
          <br />
          <p className={styles["paragraph"]}>
            Comment: <span>{instruction}</span>
          </p>
          <p className={styles["paragraph"]}>
            Choose your payment method: <span>{payment}</span>
          </p>
          <select
            className={styles["payment-styling"]}
            value={payment}
            onChange={handlePayment}
            required
          >
            <option value="MasterCard">MasterCard</option>
            <option value="Crypto">Crypto</option>
            <option value="Cash at doors">Cash at doors</option>
          </select>
          <p className={styles["paragraph"]}>Choose Delivery Method</p>
          <div className={styles["radio-styling"]}>
            <input
              id="InPost"
              type="radio"
              value="InPost"
              checked={shipping === "InPost"}
              onChange={handleShippingMethod}
              name="order-validation-radio-buttons"
              required
            ></input>
            <label htmlFor="InPost">InPost</label>
            <input
              id="DHL"
              type="radio"
              value="DHL"
              checked={shipping === "DHL"}
              onChange={handleShippingMethod}
              name="order-validation-radio-buttons"
            ></input>
            <label htmlFor="DHL">DHL</label>
            <input
              id="PocztaPolska"
              type="radio"
              value="PocztaPolska"
              checked={shipping === "PocztaPolska"}
              onChange={handleShippingMethod}
              name="order-validation-radio-buttons"
            ></input>
            <label htmlFor="PocztaPolska">PocztaPolska</label>
          </div>
          <br />
          <button>Confirm Order</button>
        </form>
      </div>
    </>
  );
}

export default DeliveryComponent;
