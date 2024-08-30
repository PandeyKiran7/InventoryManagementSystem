console.log('Inventory Management System Initialized');

const product1 = {
  name: 'Laptop',
  quantity: 20,
  price: 100000
};
const product2 = {
  name: 'Fan',
  quantity: 10,
  price: 800
};

let inventory = [product1, product2];

console.log(inventory);

// < === Adding a Product ===>

function addProduct(name, quantity, price) {
  const newProduct = {
    name,
    quantity,
    price
  };
  inventory.push(newProduct);
  displayInventory(); // Update display after adding a product
}

// Manually adding a product (corrected syntax)
addProduct('Charger', 30, 500);

console.log(inventory);

// < === Display Inventory ===>

function displayInventory() {
  const inventoryBox = document.querySelector('.inventory');
  inventoryBox.innerHTML = ''; // Clear existing content

  inventory.forEach(product => {
    const productElement = document.createElement('div');
    productElement.textContent = `Product Name: ${product.name}, Quantity: ${product.quantity} units available at $${product.price} each.`;
    inventoryBox.appendChild(productElement);
  });
}
displayInventory(); // Display initial inventory

// < === Update Product ===>

function updateProduct(name, quantity, price) {
  const product = inventory.find(product => product.name === name);
  if (product) {
    product.quantity = quantity;
    product.price = price;
  } else {
    console.log('Product not found. Please search correctly!');
  }
}

// < === Remove Product ===>

function removeProduct(name) {
  inventory = inventory.filter(product => product.name !== name);
  displayInventory(); // Update display after removing a product
}

// Update and remove some products
updateProduct('Laptop', 15, 110000);
removeProduct('Fan');

// Modify and display the inventory
displayInventory();

// < === Handle Form Submission ===>
const addProductForm = document.getElementById('addProductForm');
addProductForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = document.querySelector('.productName').value;
  const quantity = parseInt(document.querySelector('.productQuantity').value, 10);
  const price = parseInt(document.querySelector('.productPrice').value, 10);

  addProduct(name, quantity, price);
  
  addProductForm.reset(); // Reset the form after submission
});

// < === Reset Inventory ===>

const initialInventory = [...inventory]; // Save the initial inventory

function resetInventory() {
  inventory = [...initialInventory]; // Reset to initial inventory
  displayInventory(); // Update display after reset
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetInventory);
