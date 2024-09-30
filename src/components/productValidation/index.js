import React, {useState} from "react";
import "./index.css";

function ProductValidation () {
  const [errors, setErrors] = useState ({ name: false, quantity: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements["name-input"].value;
    const quantity = e.target.elements ["quantity-input"].value;

    const nameError = name === "";
    const quantityError = quantity === "";

    setErrors({ name: nameError, quantity: quantityError });

    if (!nameError && !quantityError) {
      console.log("Form Submitted");
    }
  };

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name-input"
              className={`white large outlined ${errors.name ? "error-border" : ""}`}
              placeholder="Product name"
              required
            />
            {errors.name && (
              <p className="error-text form-hint" data-testid="name-input-error">
                Product is required.
              </p>
            )}
          </label>
          <label>
            <input
              type="number"
              name="quantity-input"
              className={`white large outlined ${errors.quantity ? "error-border" : ""}`}
              placeholder="Quantity"
              required
            />
            {errors.quantity && (
              <p className="error-text form-hint" data-testid="quantity-input-error">
                Quantity is required.
              </p>
            )}
          </label>
          <button className="mt-50" type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;