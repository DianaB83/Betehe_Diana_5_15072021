function getParameter(name) {
  // URLSearchParams récupère les paramètres de l'url
  const parameters = new URLSearchParams(window.location.search);
  return parameters.get(name);
}

const id = getParameter("id");

const image = document.getElementById("teddyimg");
const colors = document.getElementById("colors");
const h2 = document.getElementById("name");
const description = document.getElementById("description");
const price = document.getElementById("price");


fetch("http://localhost:3000/api/teddies/" + id)
  .then(response => {
    if (response.ok) {
      // on récupère les datas
      response.json().then(teddy => {
        image.src = teddy.imageUrl;
        h2.innerHTML = teddy.name;
        description.innerHTML = teddy.description;
        price.innerHTML = teddy.price / 100 + "€";
        teddy.colors.forEach(color => {
          const option = document.createElement("option");
          option.value = color;
          option.innerHTML = color;
          colors.appendChild(option);
        });
        document.getElementById("ajouteraupanier").addEventListener("click", () => {
          const product = {
            id: teddy._id,
            name: teddy.name,
            color: colors.value,
            price: teddy.price
          };
          const cart = localStorage.getItem("cart");
          if(cart) {
            const order = JSON.parse(cart);
            ajoutLocalStorage(order, product);
          } else {
            const order = [];
            ajoutLocalStorage(order, product);
          }
        });
      });
    }
  });

function ajoutLocalStorage(cart, product) {
  cart.push(product);
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
  alert("coucou")
}
