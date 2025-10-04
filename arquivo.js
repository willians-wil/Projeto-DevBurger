const list = document.querySelector("ul");
const buttonShowall = document.querySelector(".show-all");
const buttonDiscount = document.querySelector(".show-descont");
const itemDescont = document.querySelector(".total-sum");
const productVegan = document.querySelector(".vegan-product");

// Reaproveitável para mostrar produtos dinamicamente
function showAll(productArray) {
  let myLi = "";

  productArray.forEach((product) => {
    myLi += `
      <li>
        <img src="${product.src}" alt="${product.name}" />
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price.toFixed(2)}</p>
      </li>
    `;
  });

  list.innerHTML = myLi;
}

// Mostrar produtos com desconto (10%)
function listDescont() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrice);
}

// Somar o valor total dos produtos
function sumOfitens() {
  const total = menuOptions.reduce((acc, item) => acc + item.price, 0);

  list.innerHTML = `
    <li>
      <p>O valor total dos itens é: R$ ${total.toFixed(2)}</p>
    </li>
  `;
}

// Filtrar e mostrar só os veganos
function listVegan() {
  const veganItems = menuOptions.filter((item) => item.vegan === true);
  showAll(veganItems);
}

// Eventos dos botões
buttonShowall.addEventListener("click", () => showAll(menuOptions));
buttonDiscount.addEventListener("click", listDescont);
itemDescont.addEventListener("click", sumOfitens);
productVegan.addEventListener("click", listVegan);
