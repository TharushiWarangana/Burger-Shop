// Array to store customer data
let customers = [];

// Get form and list elements
const customerForm = document.getElementById('customerForm');
const customerList = document.getElementById('customerList');

// Add event listener for form submission
customerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const customerId = document.getElementById('customerId').value;
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerContact = document.getElementById('customerContact').value;
    
    // Create customer object
    const customer = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        contact: customerContact
    };
    
    // Add customer to array
    customers.push(customer);
    
    // Update customer list
    updateCustomerList();
    
    // Clear form
    customerForm.reset();
});

// Function to update customer list
function updateCustomerList() {
    customerList.innerHTML = '';
    
    customers.forEach((customer, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${customer.id} - ${customer.name} - ${customer.address} - ${customer.contact}</span>
            <button class="place-order-btn" onclick="placeOrder(${index})"><i class="fa fa-shopping-cart"></i> Place Order</button>
            <button class="edit-btn" onclick="editCustomer(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteCustomer(${index})">Delete</button>
        `;
        customerList.appendChild(li);
    });
}

// Function to handle placing order (dummy implementation)
function placeOrder(index) {
    const customer = customers[index];
    alert(`Placing order for customer: ${customer.name}`);
    window.location.assign('./Menu_Burger.html');
}


// Function to edit customer
function editCustomer(index) {
    const customer = customers[index];
    const newName = prompt('Edit Customer Name:', customer.name);
    const newContact = prompt('Edit Customer Contact Number:', customer.contact);
    
    if (newName !== null && newContact !== null) {
        customers[index].name = newName;
        customers[index].contact = newContact;
        updateCustomerList();
    }
}

// Function to delete customer
function deleteCustomer(index) {
    customers.splice(index, 1);
    updateCustomerList();
}
