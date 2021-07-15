const table = document.getElementById("tableaupanier");
const cart = JSON.parse(localStorage.getItem("cart"));

for (const teddy of cart){
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdColor = document.createElement("td");
  const tdPrice = document.createElement("td");
  tdName.innerHTML = teddy.name; 
  tdColor.innerHTML = teddy.color;
  tdPrice.innerHTML = teddy.price / 100 + "€";
  tr.appendChild(tdName);
  tr.appendChild(tdColor);
  tr.appendChild(tdPrice);
  table.appendChild(tr);

}