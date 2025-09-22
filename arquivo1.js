const list = document.querySelector("ul");
const buttonShowall = document.querySelector(".show-all");
const buttonDiscount = document.querySelector(".show-descont");
const intemDescont = document.querySelector(".total-sum");
const productVegan = document.querySelector(".vegan-product");

function showAll(productArray) {
  let myLi = "";

  productArray.forEach((product) => {
    myLi += `
             <li>
                    <img src= ${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${product.price}</p> 
             </li>
          
             `;
  });
  list.innerHTML = myLi;
  e;
}

function listDescont() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrice);
}

function sumOfitens() {
  const newDescont = menuOptions.reduce((acc, value) => acc + value.price, 0);
  list.innerHTML = ` 
       <li>
              <p>O valor total dos itens é = ${newDescont}</p>
       </li>
       
       `;

  console.log(newDescont);
}

function listVegan() {
  const listVegan = menuOptions.filter((vegan) => {
    list.innerHTML = `
              <li>
                     <img src="./assets/xvegan.png" alt="Burger-Vegano" />
                     <p>Big Vegano</p>
                     <p class="item-price">R$ 55,00</p>
              </li>    
              
              <li>
                     <img src="./assets/monstruoso-vegan.png" alt="Burger-X-Vegan" />
                     <p>X-Vegan</p>
                     <p class="item-price">R$ 45,00</p> 
              </li>
              
              `;
  });
}

buttonShowall.addEventListener("click", () => showAll(menuOptions));
buttonDiscount.addEventListener("click", listDescont);
intemDescont.addEventListener("click", sumOfitens);
productVegan.addEventListener("click", listVegan);
