const filterButton = document.querySelectorAll(".select");

const pizzaItems = document.querySelectorAll(".menu__container");
console.log(pizzaItems);
console.log(filterButton);
pizzaItems.forEach(function(pizza){
if (pizza.classList.contains('chicken')){ 
    pizza.style.display='flex'
}
else{
    pizza.style.display='none'
}
})
filterButton.forEach(function (item) {
  item.addEventListener("click", function () {
    filterButton.forEach(function(btn){
btn.classList.remove('active')
    })
    const filterName = item.innerHTML;
    if (filterName === "Chicken Pizza") {
        item.classList.add('active')
      pizzaItems.forEach(function (pizza) {
          if(pizza.classList.contains('chicken')){
            pizza.style.display='flex'
          }

    else{
        pizza.style.display='none'
    }
      });
    }
    else if (filterName === "Pepperoni") {
        item.classList.add('active')
        pizzaItems.forEach(function (pizza) {
            if(pizza.classList.contains('pepperoni')){
              pizza.style.display='flex'
            }
  
      else{
          pizza.style.display='none'
      }
        });
      }
      else if (filterName === "Margherita") {
        item.classList.add('active')
        pizzaItems.forEach(function (pizza) {
            if(pizza.classList.contains('margherita')){
              pizza.style.display='flex'
            }
  
      else{
          pizza.style.display='none'
      }
        });
      }
      else if (filterName === "Hawaiian") {
        item.classList.add('active')
        pizzaItems.forEach(function (pizza) {
            if(pizza.classList.contains('hawaiian')){
              pizza.style.display='flex'
            }
  
      else{
          pizza.style.display='none'
      }
        });
        }
      else if (filterName === "Meat Lover’s Pizza") {
        item.classList.add('active')
        pizzaItems.forEach(function (pizza) {
            if(pizza.classList.contains('meat')){
              pizza.style.display='flex'
            }
  
      else{
          pizza.style.display='none'
      }
        });
      }
  });
  
});


