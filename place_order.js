// Array to store customer data
let orders = [];

// Get form and list elements
const orderForm = document.getElementById('orderForm');
const orderList = document.getElementById('orderList');

// Add event listener for form submission
orderForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const orderID = document.getElementById('orderId').value;
    const orderDate = document.getElementById('orderDate').value;
    const orderQuantity = document.getElementById('orderQuantity').value;
    const itemID = document.getElementById('itemID').value;
    const customerID = document.getElementById('customerID').value;
    const amount = document.getElementById('amount').value;
    
    // Create customer object
    const order = {
        id: orderId,
        date: orderDate,
        quantity: orderQuantity,
        itemId: itemID,
        customerId: customerID,
        amount: amount
    };
    
    // Add customer to array
    order.push(order);
    
    // Update customer list
    updateOrderList();
    
    // Clear form
    orderForm.reset();
});

// Function to update customer list
function updateCustomerList() {
    orderList.innerHTML = '';
    
    orders.forEach((order, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${order.id} - ${order.date} - ${order.quantity} - ${order.itemId}- ${order.customerId}- ${order.amount}</span>
            <button class="place-order-btn" onclick="placeOrder(${index})"><i class="fa fa-shopping-cart"></i> Place Order</button>
            <button class="edit-btn" onclick="editOrder(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteOrder(${index})">Delete</button>
        `;
        orderList.appendChild(li);
    });
}

// Function to handle placing order (dummy implementation)
function placeOrder(index) {
    const order = orders[index];
    alert(`Placing order for order: ${order.id}`);
    window.location.assign('./Menu_Burger.html');
}


// Function to edit customer
function editOrder(index) {
    const order = orders[index];
    const newDate = prompt('Edit Order Date:', order.date);
    const newQuantity = prompt('Edit Order Quantity:', order.quantity);
    const newAmount = prompt('Edit Order Amount:', order.amount);
    const newItemId = prompt('Edit Item Id:', order.itemId);
    
    if (newDate !== null && newQuantity !== null && newAmount !== null && newItemId !== null) {
        orders[index].date = newDate;
        orders[index].quantity = newQuantity;
        orders[index].amount = newAmount;
        orders[index].itemId = newItemId;
        updateOrderList();
    }
}

// Function to delete customer
function deleteOrder(index) {
    orders.splice(index, 1);
    updateOrderList();
}
