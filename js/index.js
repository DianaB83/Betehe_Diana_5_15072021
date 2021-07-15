// On récupère le container 
const catalogue = document.getElementById("container");
// On récupère les ours en peluche de l'API
fetch("http://localhost:3000/api/teddies")
    .then(response => {
        if (response.ok) {
            // on récupère les datas
            response.json().then(teddies => {
                // on parcours le tableau de peluche
                for (let teddy of teddies) {
                    // on crée les éléments HTML
                    const a = document.createElement("a");
                    a.classList.add("peluche");
                    a.href = "produit.html?id=" + teddy._id;
                    const img = document.createElement("img");
                    img.src = teddy.imageUrl;
                    const h3 = document.createElement("h3");
                    h3.innerHTML = teddy.name;
                    // on ajoute les éléments au container
                    catalogue.appendChild(a);
                    a.appendChild(img);
                    a.appendChild(h3);
                }
            })
        }
    })