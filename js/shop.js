// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

var total = 0;

// Exercise 1
function buy(productId) {
    // 1. Loop for to the array products to get the item to add to cart
    const product = products.find(item => item.id === productId);
    const itemInCart = cart.find(item => item.id === productId);
    // 2. Add found product to the cart array
    if (!itemInCart) {
        cart.push({ ...product, quantity: 1 });
    } else {
        itemInCart.quantity++;
    }
}

// Exercise 2
function cleanCart() {
    cart.length = 0;
    printCart();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach((element) => {
        if (element.offer) {
            const quantity = element.quantity;
            const minQuantity = element.offer.number;
            const discount = element.offer.percent / 100;
            const totalWithoutDiscount = element.quantity * element.price;

            if (quantity >= minQuantity) {
                element.totalWithDiscount = totalWithoutDiscount * (1 - discount);
            }
        }
    });
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart();

    const cartList = document.getElementById('cart_list');
    const totalPriceElement = document.getElementById('total_price');

    cartList.innerHTML = '';

    let totalFinal = 0;

    cart.forEach(item => {
        let totalProducto = item.price * item.quantity;
        let totalMostrado;

        if (item.totalWithDiscount !== undefined) {
            totalProducto = item.totalWithDiscount;
            totalMostrado = `$${totalProducto.toFixed(2)} (discount applied)`;
        } else {
            totalMostrado = `$${totalProducto.toFixed(2)}`;
        }

        totalFinal += totalProducto;

        const row = document.createElement('tr');

        row.innerHTML = `
            <th scope="row">${item.name}</th>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>${totalMostrado}</td>
        `;

        cartList.appendChild(row);
    });

    totalPriceElement.textContent = totalFinal.toFixed(2);
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}