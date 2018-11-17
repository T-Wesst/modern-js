document.getElementById("button1").addEventListener("click", loadCustomers);

// load customer
document.getElementById("button1").addEventListener("click", loadCustomer);
function loadCustomer(e) {
  // create xhr req
  const xhr = new XMLHttpRequest();

  // open
  xhr.open("get", "customer.json", true);

  // on load
  xhr.onload = function() {
    if (this.status === 200) {
      // parse as object
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById("customer").innerHTML = output;
    }
  };

  // send
  xhr.send();
}

// load customers
function loadCustomers(e) {
  // create xhr req
  const xhr = new XMLHttpRequest();

  // open
  xhr.open("get", "customers.json", true);

  // on load
  xhr.onload = function() {
    if (this.status === 200) {
      // parse as object
      const customers = JSON.parse(this.responseText);
      let output = "";
      customers.forEach(function(customer) {
        output += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
          `;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  // send
  xhr.send();
}
