# 🛒 Sprint 2-2 E-commerce Shopping Cart Demo

## 📄 Description

Front-end demo for an e-commerce company, built during the ITACADEMY Front-End Bootcamp.

This project implements a basic shopping cart experience using **vanilla JavaScript**:

* Add/remove items
* Apply promotions and discounts
* Validate checkout form

📌 **No back-end**: all product data is hardcoded.

🗂️ Each feature is developed in its own branch: `level-1/exercise-#`.

<br>

## ⚙️ Requirements

1. **Clona este repositorio:**

```bash
git clone https://github.com/IT-Academy-BCN/starter-code-frontend-shop
```

2. **Desvincula el repositorio original (IT Academy):**

```bash
git remote rm origin
```

3. **Vincula tu repositorio en GitHub:**

```bash
git remote add origin <URL de tu nuevo repositorio>
```

<br>

## 🛠️ Technologies Used

* HTML, CSS (**Bootstrap** for some styling)
* **Vanilla JavaScript**
* **RegEx** for form validation

<br>

## 📁 Project Structure

```
starter-code-frontend-shop/
├── css/
│   └── styles.css            # Main stylesheet
├── images/                   # Product and UI images
├── js/
│   ├── checkout.js           # Checkout logic and validation
│   └── shop.js               # Product listing and cart logic
├── .gitignore                # Git ignored files config
├── checkout.html            # Checkout page
├── index.html               # Main shop interface
└── README.md                # Project documentation
```

<br>

## 🧩 Exercises Overview

### Exercise 1: Add Products to Cart

* Implemented `buy()` function to add products to the cart.
* Used an object-based approach with a `getSubtotal()` method.
* Products track their own quantity and subtotal.
* If a product exists, its quantity is incremented and discount recalculated.

### Exercise 2: Clean Cart

* Created a reusable `updateHTML()` function to avoid repetitive DOM updates.
* `cleanCart()` resets the cart and clears the UI.
  
  **Design decision:**
  Used `cart.length = 0` to preserve array reference.
  Refactored `removeHTML()` into `updateHTML()` to follow DRY principles.

### Exercise 3: Calculate Cart Total

* Implemented `calculateTotal()` to sum product subtotals.
* Used the nullish coalescing operator (`??`) to choose between discounted and regular subtotal.

### Exercise 4: Apply Promotions

* Applied two discount rules:

  * Buy 3+ cooking oils → 20% off
  * Buy 10+ cupcake mixtures → 30% off
* Discounts saved in a new `subTotalWithDiscount` property.
* `calculateDiscount()` is called when quantities change.

### Exercise 5: Display the Cart in Modal

* Used `createElement()` for safe and structured DOM manipulation.
* Split logic into:

  * `createCartRow()` → builds rows
  * `addProductToCart()` → appends to modal
  * `updateProductInCart()` → updates values
    
    **Design decision:**
    Chose verbosity for better maintainability and control over dynamic content.

### Exercise 6: Checkout Form Validation

* Added real-time validation with `onchange` events.
* Used RegEx to validate:

  * Name/surname (letters only)
  * Phone (9 digits)
  * Email format
  * Passwords (must include letters and numbers)
    
    **Design decision:**
    Used inline validation to enhance UX and practice RegEx handling.

<br>

# 🔑 Key Learnings

- Manipulate the DOM using `createElement` for structured rendering.
- Manage product state with methods and custom properties.
- Create reusable utilities to avoid redundancy.
- Implement form validation using JavaScript and RegEx.
- Use branches and Pull Requests to merge code.

<br>

# 🚀 Future Improvements

- Complete level 2 & 3 of the sprint.

