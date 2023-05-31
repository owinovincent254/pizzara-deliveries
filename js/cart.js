const addToCart=document.querySelectorAll('.add-to-cart')
const counter=document.getElementById('counter')
console.log(counter)
const cartPreview=document.getElementById('cart-preview')
console.log(cartPreview)
const cartItems=[ ]
addToCart.forEach(function(btn){
btn.addEventListener('click', function(e){
    if(e.target.textContent==='Add to Cart'){

        console.log()
            const pizzaImage=e.target.parentElement.parentElement.children[0].children[0].getAttribute('src')
        const pizzaName=e.target.parentElement.parentElement.children[0].parentElement.children[1].children[0].textContent
        console.log(pizzaName)
        const pizzaFilling=e.target.parentElement.parentElement.children[0].parentElement.children[1].children[1].textContent
        console.log(pizzaFilling)
        const pizzaPrice=parseInt(e.target.parentElement.parentElement.children[0].parentElement.children[1].children[2].dataset.price)
        console.log(pizzaPrice)
        const pizzaItem={
            pizzaImage:pizzaImage,
            PizzaName:pizzaName,
            pizzaFilling:pizzaFilling,
            pizzaPrice:pizzaPrice
        }
        console.log(pizzaItem)
        cartItems.push(pizzaItem)
        counter.textContent=cartItems.length
            console.log(cartItems)
        e.target.textContent='Added to Cart'
    }
    const cartPreviewItem=document.createElement('div')
    console.log(cartPreviewItem)
    
//update cart-preview//
cartItems.map(item=>{
    console.log(item)
    
    cartPreviewItem.innerHTML=
    `
    <div class='cart-items'>
    <i class="fa-solid fa-xmark"></i>
    <img src=${item.pizzaImage} />
  <p>  ${item.PizzaName}</p>
  <p>${item.pizzaFilling}</p>
  <p>${item.pizzaPrice}</p>
  <input type='number' placeholder='number' width=30px />
  </div>
    `;
        cartPreview.appendChild(cartPreviewItem),
        console.log(cartPreview);

    
})
} )
})




